module.exports = {
  apps: [{
    name: "movie-ui",
    script: "./server.js",
    env: {
      BACK_HOST: "192.168.10.101"
    }
  }]
}
