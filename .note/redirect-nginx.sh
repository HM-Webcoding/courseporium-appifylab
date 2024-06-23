#!/bin/bash

# Exit on error
set -e

# Check if the user has root privileges
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Check if a domain name argument is provided
if [ $# -ne 1 ]; then
    echo "Usage: $0 <domain_name>"
    exit 1
fi

# Get the domain name from the command line argument
domain_name="$1"

# Define paths for configuration files
nginx_config="/etc/nginx/sites-available/${domain_name}"
nginx_symlink="/etc/nginx/sites-enabled/${domain_name}"
certbot_command="sudo certbot --nginx -d ${domain_name}"

# Create Nginx configuration for HTTP redirection
echo "Setting up http Nginx configuration for $domain_name..."
cat > "$nginx_config" <<EOF
server {
    listen 80;
    listen [::]:80;

    root /var/www/html;
    index index.html index.htm index.nginx-debian.html;

    server_name $domain_name;

    location / {
        return 301 http://www.$domain_name\$request_uri;
    }
}
EOF

echo "HTTP nginx configuration for $domain_name has been set up successfully."

# Create a symbolic link to enable the Nginx configuration
echo "Creating a symbolic link to enable the Nginx configuration..."
ln -s "$nginx_config" "$nginx_symlink"

# Test the Nginx configuration
echo "Testing the Nginx configuration..."
nginx -t

# Reload Nginx to apply the changes
echo "Reloading Nginx to apply the changes..."
systemctl reload nginx

# Run Certbot to obtain SSL certificates
echo "Requesting SSL certificates for $domain_name..."
$certbot_command
echo "SSL certificates for $domain_name have been obtained successfully."


# Create Nginx configuration for HTTPS redirection
echo "Setting up Nginx configuration for $domain_name..."

cat > "$nginx_config" <<EOF
server {
    server_name $domain_name;

    listen 443 ssl; 
    ssl_certificate /etc/letsencrypt/live/$domain_name/fullchain.pem; 
    ssl_certificate_key /etc/letsencrypt/live/$domain_name/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf; 
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; 

    return 301 https://www.$domain_name\$request_uri;
}
EOF

echo "Nginx configuration for $domain_name has been set up successfully."

# Reload Nginx to apply the changes
echo "Reloading Nginx to apply the changes..."
systemctl reload nginx


# Reset the 'set -e' option to allow script termination
set +e