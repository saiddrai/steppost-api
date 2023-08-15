module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "http:", "https:", "*"],
          "img-src": ["'self'", "data:", "blob:", "*"],
          "media-src": ["'self'", "data:", "blob:", "*"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["*"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      headers: ["Content-Type", "Authorization"],
      credentials: true,
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
