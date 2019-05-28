### **middlewares** Folder

The middlewares folder follows the globally known pattern. 
Any checks or treatments take place on that layer, something like:

- Check if user is authenticated to enter in requested route. ( `isAuth `)
- Check if user authenticated has access to requested resource ( `role`)