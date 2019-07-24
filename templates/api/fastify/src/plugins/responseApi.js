'use strict'

const fp = require('fastify-plugin')
const generateResponse = require('../utils/generatorResponse')

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope
module.exports = fp(function (fastify, opts, next) {
  fastify.decorateReply('success', function (data = [], response = {}) {
    // Setting defaults
    response.error = response.error || false
    response.message = response.message || 'Success'

    this.type('application/json')
    this.send(generateResponse(data, response))
  })
  fastify.decorateReply('error', function (response = {}) {
    // Setting defaults
    response.code = response.code || 400
    response.error = response.error || true
    response.message = response.message || 'Error'

    this.type('application/json')
    this.send(generateResponse([], response))
  })
  next()
})
