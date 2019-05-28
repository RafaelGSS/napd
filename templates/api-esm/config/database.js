/**
 * Export configuration default in array
 */
export default [
  {
    default: {
      driver: process.env.DB_DRIVER,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT
    },
  },
];
