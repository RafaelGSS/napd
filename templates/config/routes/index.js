const loadRoutesByPath = require("./loadRoutesByPath");
const registerRoute = require("./registerRoute");

const registerRoutesByPath = (app, dirName) => {
  const routes = loadRoutesByPath(dirName);

  routes.forEach(route => registerRoute(app, route));
};

module.exports = registerRoutesByPath;
