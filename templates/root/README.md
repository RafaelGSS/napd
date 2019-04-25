# NodeJS API Structure
The project structure for helping new api using any http server ( Using express for these boilerplate ) 

## Structure

```
bin/
config/
  routes/
/src/
|- data/
|-- connections/
|-- repositories/
|-- structures/    
|- domain/
|- handlers/
|- middlewares/
|- routes/
|- services/
|- utils/
/tests/
```
## Concept of Structure

This structure, is based on some designs like **DDD**, **Middleware Based NodeJS** and the folders has the follow objectives:

__bin/__ -  Binaries folder, can be used for routines postinstall of npm.

__config/__ -  All of the configurations autoload of the project, like database variables.

__config/routes/__ -  Autoload of routes for less dependency.

__src/data/__ -  Contains the files for manipulating the connection ( repositories, structures, connection )

__src/domain/__ -  Following the concept of DDD, the domain can be a domain of your application.

__src/handlers/__ -  Following the concept of Middleware Based, the handlers manipulate the requests and delegate to your services.

__src/middlewares/__ -  Middleware of routes, can be Auth, Roles...

__src/routes/__ -  All routes for your project ( Obs: The route need has the name like *.route.js inside folder __routes/__ ).

__src/services/__ -  Services for your application.

__src/utils/__ -  Utils for your application, parser, and any util.

__tests/__ -  Tests, actually using JEST.


## Tests

```sh
npm install
npm test
```

## Dependencies

- [dotenv](https://ghub.io/dotenv): Loads environment variables from .env file
- [express](https://ghub.io/express): Fast, unopinionated, minimalist web framework
- [express-rescue](https://ghub.io/express-rescue): A wrapper for async functions which makes sure all async errors are passed to your errors handler
- [filter-files](https://ghub.io/filter-files): Recursively read directories and return a list of files, filtered to have only the files for which the (optional) filter function returns `true`. Sync and async.
- [is-directory](https://ghub.io/is-directory): Returns true if a filepath exists on the file system and it&#39;s directory.
- [lodash](https://ghub.io/lodash): Lodash modular utilities.
- [mongodb](https://ghub.io/mongodb): The official MongoDB driver for Node.js

## Dev Dependencies

- [@types/dotenv](https://ghub.io/@types/dotenv): TypeScript definitions for dotenv
- [@types/express](https://ghub.io/@types/express): TypeScript definitions for Express
- [@types/node](https://ghub.io/@types/node): TypeScript definitions for Node.js
- [chai](https://ghub.io/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [mocha](https://ghub.io/mocha): simple, flexible, fun test framework
- [nodemon](https://ghub.io/nodemon): Simple monitor script for use during development of a node.js app.
- [tslint](https://ghub.io/tslint): An extensible static analysis linter for the TypeScript language
- [typescript](https://ghub.io/typescript): TypeScript is a language for application scale JavaScript development

## License

MIT

## CONTRIBUITING

Please read **CONTRIBUITING.md**

## TODO

Please read **TODO.md**
