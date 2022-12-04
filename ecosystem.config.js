module.exports = {
    apps : [{
      name: 'NextJS Apps',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 8080',
      ccwd:"/var/www/html/testprod/",
      instances: 1,
      watch: false,
    }]
  };