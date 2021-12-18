'use strict'

const fp = require('fastify-plugin')

const defaultPayload = { error: 'Method not allowed' }
async function fastifyGetOnly (
  fastify,
  { httpStatusCode = 405, errorPayload = defaultPayload }
) {
  fastify.addHook('onRequest', async (request, reply) => {
    if (request.method !== 'GET') {
      reply.status(httpStatusCode).send(errorPayload)
    }
  })
}

module.exports = fp(fastifyGetOnly, {
  fastify: '3.x',
  name: 'fastify-get-only'
})
