export default (req, res, next) => {
  // Do you can define properties to execute in realtime
  // Object.defineProperties(req, {
  //   $handler: {
  //     get: () => factoryHandler(),
  //   },
  // });
  next();
};