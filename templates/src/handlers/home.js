const rescue = require("express-rescue");

const handler = {
    // Home
    home: () => {
        return [
            (req, res, next) => {
                // JOI or another validation HERE
                next();
            },
            rescue(async (req, res) => {
            }),
            (error, req, res, next) => {
                console.log(error);
                res.json(
                    res.setErrorMessage("A error ocurred"),
                );
            },
        ];
    },
};

module.exports = handler;
