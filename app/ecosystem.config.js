module.exports = {
  apps: [
    {
      name: "socket-server",
      script: "server.js",
      instances: "max", // auto-detect CPUs
      exec_mode: "cluster", // necessary for load balancing
      env: {
        PORT: 3000
      }
    }
  ]
};
