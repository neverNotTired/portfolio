module.exports = {
  apps: [
    {
      name: 'cms-strapi',
      cwd: '/var/www/jmtaylor/cms',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 8081
      }
    }
  ]
};
