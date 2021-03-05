module.exports = {
  apps : [
      {
        name: "nnn-discord-bot",
        script: "./index.js",
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
