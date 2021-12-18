const { test } = require("tap");

test("Should return 200 on GET request", async t => {
	t.plan(1);

	const app = require("fastify")();

	app.register(require(".."));
	app.get("/", (req, reply) => {
		return { hello: "world" };
	});

	await app.ready();

	const response = await app.inject({
		method: "GET",
		url: "/",
	});

	t.equal(response.statusCode, 200);
});

test("Should return 405 on POST request", async t => {
	t.plan(1);

	const app = require("fastify")();

	app.register(require(".."));
	app.post("/", (req, reply) => {
		return { hello: "world" };
	});

	await app.ready();

	const response = await app.inject({
		method: "POST",
		url: "/",
	});

	t.equal(response.statusCode, 405);
});

test("Should return default body if none is specified", async t => {
	t.plan(1);

	const app = require("fastify")();

	app.register(require(".."));
	app.post("/", (req, reply) => {
		return { hello: "world" };
	});

	await app.ready();

	const response = await app.inject({
		method: "POST",
		url: "/",
	});

	const bodyResponse = JSON.parse(response.body);
	t.same(bodyResponse, { error: "Method not allowed" });
});

test("Should return custom body if it is specified", async t => {
	t.plan(1);

	const app = require("fastify")();

	const customPayload = { error: "Custom error" };
	app.register(require(".."), { errorPayload: customPayload });
	app.post("/", (req, reply) => {
		return { hello: "world" };
	});

	await app.ready();

	const response = await app.inject({
		method: "POST",
		url: "/",
	});

	const bodyResponse = JSON.parse(response.body);
	t.same(bodyResponse, customPayload);
});

test("Should return custom code if it is specified", async t => {
	t.plan(1);

	const app = require("fastify")();

	app.register(require(".."), { httpStatusCode: 500 });
	app.post("/", (req, reply) => {
		return { hello: "world" };
	});

	await app.ready();

	const response = await app.inject({
		method: "POST",
		url: "/",
	});

	t.equal(response.statusCode, 500);
});
