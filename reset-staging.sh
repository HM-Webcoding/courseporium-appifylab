#!/bin/bash

set -e  # Exit immediately if a command fails

delete_remote=false

# Check if argument is provided
if [ "$1" == "--delete-remote" ]; then
    delete_remote=true
fi

# Switch to main branch
git switch main
echo "Switched to main branch"

# Pull latest changes from remote main branch
echo "Pulling latest changes from remote main branch..."
git pull origin main
echo "Pulled latest changes from remote main branch"

# Delete local staging branch if exists
git branch -D staging || true
echo "Deleted local staging branch"

# Delete remote staging branch if option provided and branch exists
if $delete_remote; then
    git push origin -d staging || true
    echo "Deleted remote staging branch"
fi

# Create and checkout new staging branch from main if --delete-remote option is passed
if $delete_remote; then
    git checkout -b staging
    echo "Created and checked out new staging branch from main"

    # Replace string in next.config.js
    # Check if the operating system is Windows
    if [[ "$OSTYPE" == "msys" ]]; then
        echo "Windows OS detected"
        # For Windows, use a temporary file and then move it to overwrite the original file
        sed 's|https://ezymaincdn.b-cdn.net|https://stagingserver.b-cdn.net|g' next.config.js > next.config.js.tmp && mv next.config.js.tmp next.config.js
    # Check if the operating system is Linux
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "Linux OS detected"
        # For Linux, use the -i option with a backup file extension
        sed -i 's|https://ezymaincdn.b-cdn.net|https://stagingserver.b-cdn.net|g' next.config.js
    else
        echo "macOS OS detected: $OSTYPE"
        # For macOS, use the -i option with an empty string for the backup file
        sed -i '' 's|https://ezymaincdn.b-cdn.net|https://stagingserver.b-cdn.net|g' next.config.js
    fi
    
    # Commit changes
    git add next.config.js
    git commit -m "chore: update staging assetPrefix"
else
    git switch staging
    echo "Switched to 'origin/staging' branch from remote"
fi


# Push new staging branch to remote if --delete-remote option is passed
if $delete_remote; then
    git push -u origin staging
    echo "Pushed new staging branch to remote"
fi

echo "Staging reset complete!"
set +e  # Disable exit on error