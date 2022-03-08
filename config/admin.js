module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ebf3d9a563c76c334a20eeca8169bab2'),
  },
});
