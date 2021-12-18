import fastify from 'fastify'
import FastifyGetOnly from '..'

let app = fastify()

app = fastify()

async function test (): Promise<void> {
  await app.register(FastifyGetOnly, { httpStatusCode: 200 })
  await app.register(FastifyGetOnly, {
    errorPayload: { error: 'Custom Error' }
  })
  await app.register(FastifyGetOnly, {
    errorPayload: { error: 'Custom Error' },
    httpStatusCode: 200
  })
}

test().catch(err => console.error(err))
