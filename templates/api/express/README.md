## ESM API Structure

ESM Api structure 

1. [Installation](#installation)
2. [How to run tests](#tests)
3. [Concept of Project Structure](#concept-of-structure)
    1. [Explain Data folder](#data-folder)
    2. [Explain Handlers folder](#handlers-folder)
    3. [Explain Middlewares folder](#middlewares-folder)
        1. [Explain Global folder](#global-folder)
    5. [Explain Routes folder](#routes-folder)
    6. [Explain Services folder](#services-folder)
    4. [Explain Utils folder](#utils-folder)
4. [Hooks](#hooks)
    1. [Script Hooks](#script-hooks)
    2. [Git hooks](#git-hooks)
5. [Dependencies of project](#dependencies)
6. [Dev Dependencies of project](#dev-dependencies)

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install
```

## Tests

```sh
npm run test
```

## Concept of Structure

```
├── app.js
├── data
│   ├── connections
│   ├── README.md
│   ├── repositories
│   └── structures
├── domain
│   └── README.md
├── handlers
│   ├── home.js
│   └── README.md
├── index.js
├── middlewares
│   ├── global
│   │   ├── dependencyInjection.js
│   │   ├── README.md
│   │   └── responseApi.js
│   └── README.md
├── routes
│   ├── README.md
│   └── routes.js
├── services
│   └── README.md
└── utils
    └── README.md
```

### **data** Folder

The data folder contains all point of access to external data, like Database, Repositories or any other source of dataaccess 

The data folder can the following sub folders:

- Repositories // Abstraction of connection data
- Connection // The raw connections like PostgreSQL, MongoDB etc...
- Structures // Abstraction of model of data

### **domain** Folder

A sphere of knowledge (ontology), influence, or activity. The subject area to which the user applies a program is the domain of the software

### **handlers** Folder 

The handlers folder contains all of the handlers of requests ( Similar to the Controller in MVC Pattern ) and he has the following responsibilities:

- Validation of data (`JOI` by default)
- Delegate response to the requested resource ( Like `BO`, `DOMAIN`, `SERVICES`)
- Catch all exceptions and treat them ( Using `rescue` in these cases)


### **middlewares** Folder

The middlewares folder follows the globally known pattern. 
Any checks or treatments take place on that layer, something like:

- Check if user is authenticated to enter in requested route. ( `isAuth `)
- Check if user authenticated has access to requested resource ( `role`)


#### **global** Folder

The global folder inside middleware, means that they are global and commons `middlewares` on **all routes**

#### **routes** Folder

The `routes.js` contains all register of routes, and they has the following responsibility:

- Register routes and method ( **GET| POST| PUT| DELETE| PATCH** )
- Register middleware to route that needs them
- Delegate the response to the last middleware (`handler`)

### **services** Folder

The services folder can be used to delegate responsibility to each **functionality** of software

### **utils** Folder

Are the simplest functions that will help you in your business rule

## Hooks

Hooks are routines that runs automatically after a event

### Script Hooks

Has the follow scripts hooks registered

- postinstall - After `npm install` generate .env file if not exists

### Git Hooks

Has the follow git hooks registered

- git commit - After `git commit` runs `npm run lint` and `npm run test` if no error, continue

## Dependencies

- [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [express-rescue](https://ghub.io/express-rescue): A wrapper for async functions which makes sure all async errors are passed to your errors handler

## Dev Dependencies

- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-standard](https://ghub.io/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
- [eslint-plugin-node](https://ghub.io/eslint-plugin-node): Additional ESLint&#39;s rules for Node.js
- [eslint-plugin-promise](https://ghub.io/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-standard](https://ghub.io/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [nodemon](https://ghub.io/nodemon): Simple monitor script for use during development of a node.js app.
