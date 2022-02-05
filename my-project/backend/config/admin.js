module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3867b91906b08a9d797e6eb216f2e233'),
  },
});
