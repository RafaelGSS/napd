import { join } from 'path'

import AutoLoad from '@fastify/autoload'
import helmet from '@fastify/helmet'

import swagger from '@fastify/swagger'
import configSwagger from './config/swagger'

export default function (fastify, opts, next) {
  // This loads a set of 12 middlewares for security
  // See more in https://github.com/fastify/fastify-helmet
  fastify.register(
    helmet,
    {}
  )

  // Register Swagger documentation
  // Just use { schema } in routes
  fastify.register(swagger, configSwagger)

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in services
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: join(__dirname, 'services'),
    options: Object.assign({}, opts)
  })

  // Make sure to call next when done
  next()
}
