### **routes** Folder

The `routes.js` contains all register of routes, and they has the following responsibility:

- Register routes and method ( **GET| POST| PUT| DELETE| PATCH** )
- Register middleware to route that needs them
- Delegate the response to the last middleware (`handler`)