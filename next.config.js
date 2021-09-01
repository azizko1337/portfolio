const withPWA = require("next-pwa");

module.exports = withPWA({
  images: {
    domains: ["www.scdn.co"],
  },
});
