# fastify-get-only

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  ![CI workflow](https://github.com/DanieleFedeli/fastify-get-only/workflows/CI%20workflow/badge.svg)

Supports Fastify versions `3.x`

## Install
```
npm i fastify-get-only
```

## Usage
Require\Import `fastify-get-only` and register.
```js
// CommonJS
const fastify = require('fastify')();

fastify.register(require('fastify-get-only'), {
  httpStatusCode: 400 // Default is 405
  errorPayload: {
    whateverYouWant: "Method not allowed"
  }
});

// ESM
import Fastify from 'fastify';
import FastifyGetOnly from 'fastify-get-only';

fastify.register(FastifyGetOnly, {
  httpStatusCode: 400,
  errorPayload: {
    whateverYouWant: "Method not allowed"
  }
})

```

## License

Licensed under [MIT](./LICENSE).<br/>
