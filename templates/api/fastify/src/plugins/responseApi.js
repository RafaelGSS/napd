'use strict'

const fp = require('fastify-plugin')
const generateResponse = require('../utils/generatorResponse')

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

module.exports = fp(function (fastify, opts, next) {
  fastify.decorateReply('success', function ({ message = 'Success', data = [], code = 200 }) {
    this.type('application/json')
    this.send(generateResponse(data, message, code, false))
  })
  fastify.decorateReply('error', function ({ message = 'Error', data = [], code = 400 }) {
    this.type('application/json')
    this.send(generateResponse(data, message, code, true))
  })
  next()
})
