module.exports = {
  apps: [
    {
      name: 'frontend',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: '/root/client/node_modules/next/dist/bin/next',
      args: 'start',
      max_memory_restart: '1000M',
    },
  ],
};
