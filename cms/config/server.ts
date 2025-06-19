module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', '/'), // This allows /cms in production
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});