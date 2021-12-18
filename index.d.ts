import { FastifyPlugin } from 'fastify'

export interface FastifyGetOnlyOptions {
  httpStatusCode?: number
  errorPayload?: unknown
}

declare const fastifyGetOnly: FastifyPlugin<FastifyGetOnlyOptions>

export default fastifyGetOnly
