'use strict'

const { test } = require('tap')
const sget = require('simple-get').concat

const Fastify = require('fastify')

const responseApi = require('../../src/plugins/responseApi')

test('responseApi decorateReply works in encapsulation', t => {
  t.plan(7)
  const fastify = Fastify()
  fastify.register(responseApi)

  fastify.register((instance, opts, next) => {
    instance.get('/test-responseApi', (request, reply) => {
      t.ok(reply.success, 'success decorator exists')
      t.ok(reply.error, 'error decorator exists')
      reply.send({ hello: 'world' })
    })

    next()
  })

  fastify.listen(0, err => {
    t.error(err)
    fastify.server.unref()

    sget({
      method: 'GET',
      url: 'http://localhost:' + fastify.server.address().port + '/test-responseApi'
    }, (err, response, body) => {
      t.error(err)
      t.strictEqual(response.statusCode, 200)
      t.strictEqual(response.headers['content-length'], '' + body.length)
      t.deepEqual(JSON.parse(body), { hello: 'world' })
      t.end()
    })
    // t.equal(fastify.res.error().response.error, true)
  })
})

// If you prefer async/await, use the following
//
// test('support works standalone', async (t) => {
//   const fastify = Fastify()
//   fastify.register(Support)
//
//   await fastify.ready()
//   t.equal(fastify.someSupport(), 'hugs')
// })
