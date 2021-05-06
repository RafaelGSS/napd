import { config } from 'dotenv';

config();

export default {
  port: process.env.PORT || 3000,
  loggerLevel: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  swagger: {
    routePrefix: '/docs',
    swagger: {
      info: {
        title: 'Example API',
      },
      host: `localhost:${process.env.PORT || 3000}`,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
    exposeRoute: true,
  },
};
