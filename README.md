# NAPD
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Node API Project Design - Cli for generate structure base of api.

## Installing globally

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

```bash
npm i -g napd
```

## Setup application

**Help:**

```bash
napd -h
```

**Initialize an application on current directory**
```bash
napd init <PROJECT_NAME> <TEMPLATE_TYPE>
```

**Initialize an application on another directory**
```bash
napd init <PROJECT_NAME> <TEMPLATE_TYPE> --dir DIRECTORY
```

## Templates

### API - Express ESM

API Base with ESM Modules - Check the [docs](templates/api/express/README.md)

### API - Fastify

API Base with Fastify - Check the [docs](templates/api/fastify/README.md)

## Dependencies

- [caporal](https://ghub.io/caporal): A full-featured framework for building command line applications (cli) with node.js
- [enquirer](https://ghub.io/enquirer): Stylish, intuitive and user-friendly prompt system. Fast and lightweight enough for small projects, powerful and extensible enough for the most advanced use cases.
- [fs-extra](https://ghub.io/fs-extra): fs-extra contains methods that aren&#39;t included in the vanilla Node.js fs package. Such as mkdir -p, cp -r, and rm -rf.
- [mv](https://ghub.io/mv): fs.rename but works across devices. same as the unix utility &#39;mv&#39;
- [ora](https://ghub.io/ora): Elegant terminal spinner

## License

MIT
