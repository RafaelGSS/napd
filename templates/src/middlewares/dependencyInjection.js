export default (req, res, next) => {
    const repositories = {};

    Object.defineProperties(repositories, {
        property: {
            get: () => new Error("Not implemented"),
        },
    });

    req.$repositories = repositories;
    next();
};