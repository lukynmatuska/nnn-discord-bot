module.exports = {
  apps : [
      {
        name: "nalivacka",
        script: "./app.js",
        watch: true,
        env: {
            "NODE_ENV": "development"
        },
        env_production: {
            "NODE_ENV": "production",
        }
      }
  ]
}

// https://pm2.keymetrics.io/docs/usage/environment/
