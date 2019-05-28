## Admin SMAC

Administrator SMAC available for manager Admin Modules

1. [Installation](#installation)
2. [How to run tests](#tests)
3. [Concept of Project Structure](#concept-of-structure)
    1. [Explain Data folder](#data-folder)
    2. [Explain Handlers folder](#handlers-folder)
    3. [Explain Middlewares folder](#middlewares-folder)
        1. [Explain Global folder](#global-folder)
    4. [Explain Presentation folder](#presentation-folder)
    5. [Explain Routes folder](#routes-folder)
    6. [Explain Services folder](#services-folder)
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
src/
├── app.js
├── data
│   └── http
│       ├── factory.js
│       └── weatherApi.js
├── handlers
│   ├── admin-module
│   │   ├── index.js
│   │   ├── pageListModules.js
│   ├── auth
│   │   ├── index.js
│   │   ├── makeLogin.js
│   │   ├── makeLogout.js
│   │   └── pageLogin.js
│   └── index.js
├── middlewares
│   ├── global
│   │   ├── dependencyContainer.js
│   │   ├── globalNjk.js
│   │   └── responseApi.js
│   ├── index.js
│   ├── isAuth.js
│   ├── redirectIfAuthenticated.js
│   └── role.js
├── presentation
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   └── js
│   ├── locales
│   │   ├── en_US.json
│   │   └── pt_BR.json
│   └── views
│       ├── admin-module
│       │   └── list-modules.html
│       ├── auth
│       │   └── login.html
│       ├── index.html
│       ├── layouts
│       │   ├── _auth.html
│       │   └── _base.html
│       └── partials
│           └── _sidebar.html
├── routes
│   └── routes.js
└── services
    └── auth.js
```

### **data** Folder

The data folder contains all point of access to external data, like Database, Repositories or any other source of dataaccess 

The data folder can the following sub folders:

- Repositories // Abstraction of connection data
- Connection // The raw connections like PostgreSQL, MongoDB etc...
- Structures // Abstraction of model of data

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

### **presentation** Folder

The presentation folder in this project is only a project that contains all the resources of front-end needs

### **routes** Folder

The `routes.js` contains all register of routes, and they has the following responsibility:

- Register routes and method ( **GET| POST| PUT| DELETE| PATCH** )
- Register middleware to route that needs them
- Delegate the response to the last middleware (`handler`)

### **services** Folder

The services folder can be used to delegate responsibility to each **functionality** of software

## Hooks

Hooks are routines that runs automatically after a event

### Script Hooks

Has the follow scripts hooks registered

- postinstall - After `npm install` generate .env file if not exists

### Git Hooks

Has the follow git hooks registered

- git commit - After `git commit` runs `npm run lint` and `npm run test` if no error, continue

## Dependencies

- [@hapi/joi](https://ghub.io/@hapi/joi): Object schema validation
- [bootstrap](https://ghub.io/bootstrap): The most popular front-end framework for developing responsive, mobile first projects on the web.
- [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [express-rescue](https://ghub.io/express-rescue): A wrapper for async functions which makes sure all async errors are passed to your errors handler
- [express-session](https://ghub.io/express-session): Simple session middleware for Express
- [filter-files](https://ghub.io/filter-files): Recursively read directories and return a list of files, filtered to have only the files for which the (optional) filter function returns `true`. Sync and async.
- [i18n](https://ghub.io/i18n): lightweight translation module with dynamic json storage
- [is-directory](https://ghub.io/is-directory): Returns true if a filepath exists on the file system and it&#39;s directory.
- [lodash](https://ghub.io/lodash): Lodash modular utilities.
- [nunjucks](https://ghub.io/nunjucks): A powerful templating engine with inheritance, asynchronous control, and more (jinja2 inspired)
- [passport](https://ghub.io/passport): Simple, unobtrusive authentication for Node.js.
- [passport-local](https://ghub.io/passport-local): Local username and password authentication strategy for Passport.
- [session-file-store](https://ghub.io/session-file-store): Session file store is a provision for storing session data in the session file
- [uuid](https://ghub.io/uuid): RFC4122 (v1, v4, and v5) UUIDs
- [weatherapi](https://ghub.io/weatherapi): Componente para acessar os recursos da api climatempo

## Dev Dependencies

- [@fortawesome/fontawesome-free](https://ghub.io/@fortawesome/fontawesome-free): The iconic font, CSS, and SVG framework
- [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-standard](https://ghub.io/eslint-config-standard): JavaScript Standard Style - ESLint Shareable Config
- [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
- [eslint-plugin-node](https://ghub.io/eslint-plugin-node): Additional ESLint&#39;s rules for Node.js
- [eslint-plugin-promise](https://ghub.io/eslint-plugin-promise): Enforce best practices for JavaScript promises
- [eslint-plugin-standard](https://ghub.io/eslint-plugin-standard): ESlint Plugin for the Standard Linter
- [jest](https://ghub.io/jest): Delightful JavaScript Testing.
- [nodemon](https://ghub.io/nodemon): Simple monitor script for use during development of a node.js app.
- [pre-commit](https://ghub.io/pre-commit): Automatically install pre-commit hooks for your npm modules.
