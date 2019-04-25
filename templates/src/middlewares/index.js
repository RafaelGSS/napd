module.exports = (req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.data = {
        response: {
            status: null,
            message: null,
            error: null,
            version: process.env.VERSION || "0.0.0",
        },
        data: [],
    };
    res.setData = (data, message = "success") => {
        res.data.data = data;
        res.data.response.status = "success";
        res.data.response.message = message;
        return res.data;
    };
    res.setSuccessMessage = (message = "Success!") => {
        res.data.response.status = "success";
        res.data.response.message = message;
        return res.data;
    };
    res.setErrorMessage = (errorCode, message = "Failed!") => {
        res.data.response.status = "failed";
        res.data.response.error = errorCode;
        res.data.response.message = message;
        return res.data;
    };
    next();
};
