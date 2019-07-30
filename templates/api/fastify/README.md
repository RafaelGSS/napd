# napd-fastify

Some description of project

## Installation

```sh
npm install
```

**So copy the `.env.example` to `.env` and configure envroiment variables.**

## Tests

```sh
npm run test
```
## Docker

### Dev

Build
```sh
docker build -t napd-fastify .
```

Running
```sh
docker run -p 3000:3000 -e DEV=1 -v $(pwd):/app -t napd-fastify
```

### Prod

Build
```sh
docker build -t napd-fastify .
```

Running
```sh
docker run -p 3000:3000 -t napd-fastify
```

## Concept of Structure

```
├── src
│   ├── app.js
│   ├── config
│   │   ├── mongodb.js
│   │   ├── sentry.js
│   │   └── swagger.js
│   ├── plugins
│   │   ├── README.md
│   │   ├── responseApi.js
│   │   └── sentry.js
│   ├── server.js
│   ├── services
│   │   ├── lightningCount.js
│   │   ├── lightning.js
│   │   ├── README.md
│   │   └── root.js
│   └── utils
│       └── generatorResponse.js
└── test
    ├── helper.js
    ├── plugins
    │   ├── responseApi.test.js
    │   └── sentry.test.js
    ├── services
    │   ├── lightning.test.js
    │   └── root.test.js
    └── util
        └── date.js
```

### **config** Folder

Every base configuration is exported there, is an adapter between environment variables for JS.

### **plugins** Folder

Fastify allows the user to extend its functionalities with plugins.
A plugin can be a set of routes, a server [decorator](https://github.com/fastify/fastify/blob/master/docs/Decorators.md) or whatever. The API that you will need to use one or more plugins, is `register`.<br>

By default, `register` creates a *new scope*, this means that if you do some changes to the Fastify instance (via `decorate`), this change will not be reflected to the current context ancestors, but only to its sons. This feature allows us to achieve plugin *encapsulation* and *inheritance*, in this way we create a *direct acyclic graph* (DAG) and we will not have issues caused by cross dependencies.

You already see in the [getting started](https://github.com/fastify/fastify/blob/master/docs/Getting-Started.md#register) section how using this API is pretty straightforward.
```
fastify.register(plugin, [options])
```

### **services** Folder

Services define routes within your application. Fastify provides an
easy path to a microservice architecture, in the future you might want
to independently deploy some of those.

In this folder you should define all the services that define the routes
of your web application.
Each service is a [Fastify
plugin](https://www.fastify.io/docs/latest/Plugins/), it is
encapsulated (it can have its own independent plugins) and it is
typically stored in a file; be careful to group your routes logically,
e.g. all `/users` routes in a `users.js` file. We have added
a `root.js` file for you with a '/' root added.

If a single file become too large, create a folder and add a `index.js` file there:
this file must be a Fastify plugin, and it will be loaded automatically
by the application. You can now add as many files as you want inside that folder.
In this way you can create complex services within a single monolith,
and eventually extract them.

If you need to share functionality between services, place that
functionality into the `plugins` folder, and share it via
[decorators](https://www.fastify.io/docs/latest/Decorators/).


## Dependencies

- [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
- [fastify](https://ghub.io/fastify): Fast and low overhead web framework, for Node.js
- [fastify-autoload](https://ghub.io/fastify-autoload): Require all plugins in a directory
- [fastify-helmet](https://ghub.io/fastify-helmet): Important security headers for Fastify
- [fastify-plugin](https://ghub.io/fastify-plugin): Plugin helper for Fastify
- [fastify-swagger](https://ghub.io/fastify-swagger): Generate Swagger files automatically for Fastify.

## Dev Dependencies

- [eslint-config-standard](https://ghub.io/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
- [eslint-plugin-node](https://ghub.io/eslint-plugin-node): Additional ESLint&#39;s rules for Node.js
- [eslint-plugin-promise](https://ghub.io/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-standard](https://ghub.io/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [nodemon](https://ghub.io/nodemon): Simple monitor script for use during development of a node.js app.
- [pre-commit](https://ghub.io/pre-commit): Automatically install pre-commit hooks for your npm modules.
- [simple-get](https://ghub.io/simple-get): Simplest way to make http get requests. Supports HTTPS, redirects, gzip/deflate, streams in &lt; 100 lines.
- [standard](https://ghub.io/standard): JavaScript Standard Style
- [tap](https://ghub.io/tap): A Test-Anything-Protocol library

## License

MIT
