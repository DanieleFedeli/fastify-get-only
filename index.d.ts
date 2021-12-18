import { FastifyPlugin } from "fastify";

declare const fastifyGetOnly: FastifyPlugin<() => string>;

export interface FastifyGetOnlyOptions {
	httpStatusCode?: number;
	errorPayload?: unknown;
}

export default fastifyGetOnly;
