export default function (fastify, opts, next) {
  fastify.get('/', {
    schema: {
      description: 'Get example data',
      tags: ['Example Tag'],
      summary: 'Example of sumary'
    }
  }, function (_request, reply) {
    reply.success({ ok: true })
  })

  next()
}

// If you prefer async/await, use the following
//
// module.exports = async function (fastify, opts) {
//   fastify.get('/', async function (request, reply) {
//     return { root: true }
//   })
// }
