import HomeHandler from "../handlers/home";

const initRoutes = (app) => {
    /**
     * Index route
     */
    app.get("/", HomeHandler);
};

export default initRoutes
