### **handlers** Folder 

The handlers folder contains all of the handlers of requests ( Similar to the Controller in MVC Pattern ) and he has the following responsibilities:

- Validation of data (`JOI` by default)
- Delegate response to the requested resource ( Like `BO`, `DOMAIN`, `SERVICES`)
- Catch all exceptions and treat them ( Using `rescue` in these cases)
