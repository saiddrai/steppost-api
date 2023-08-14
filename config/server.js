module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  admin: {
    path: "/admin",
    build: {
      backend: env("ADMIN_BUILD_BACKEND", env("VITE_APP_API_URL")),
    },
  },
});
