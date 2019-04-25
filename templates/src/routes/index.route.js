const handler = require("../handlers/home");

module.exports = (app) => {
    app.get("/", handler.home());
};
