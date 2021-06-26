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
├── package.json
├── package-lock.json
├── src/
│   ├── application/
│   │   ├── dtos/
│   │   │   └── createClientRequestDto.ts
│   │   ├── modules/
│   │   │   └── clientModule.ts
│   │   └── services/
│   │       └── clientService.ts
│   ├── config/
│   │   └── index.ts
│   ├── domain/
│   │   └── client
│   │       └── client.entity.ts
│   ├── infra/
│   │   └── responseApi.ts
│   ├── main.ts
│   ├── server.ts
│   └── web/
│       ├── client.controller.ts
│       └── controller.ts
├── test/
└── tsconfig.json
```

### **config** Folder

Every base configuration is exported there, is an adapter between environment variables for TS/JS.

### Architecture overall

The scaffolding is strictly based in the Hexagonal Architecture

![@hgraca demonstration architecture](https://user-images.githubusercontent.com/26234614/123518600-fc2c9100-d67c-11eb-896f-90444b6c7828.png)

## Dependencies

- [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
- [fastify](https://ghub.io/fastify): Fast and low overhead web framework, for Node.js
- [fastify-plugin](https://ghub.io/fastify-plugin): Plugin helper for Fastify
- [fastify-swagger](https://ghub.io/fastify-swagger): Generate Swagger files automatically for Fastify.

## Dev Dependencies

- [@types/node](https://ghub.io/@types/node): TypeScript definitions for Node.js
- [@typescript-eslint/eslint-plugin](https://ghub.io/@typescript-eslint/eslint-plugin): TypeScript plugin for ESLint
- [@typescript-eslint/parser](https://ghub.io/@typescript-eslint/parser): An ESLint custom parser which leverages TypeScript ESTree
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-airbnb-base](https://ghub.io/eslint-config-airbnb-base): Airbnb&#39;s base JS ESLint config, following our styleguide
- [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
- [ts-node](https://ghub.io/ts-node): TypeScript execution environment and REPL for node.js, with source map support
- [typescript](https://ghub.io/typescript): TypeScript is a language for application scale JavaScript development

## License

MIT
