import { config } from "dotenv";
config();

import express from "express";

import registerRoutes from "./routes/routes.js";

import builderResponseMiddleware from "./middlewares/global/responseApi";
// import dependencyInjection from "./middlewares/global/dependencyInjection";

const app = express();

// Base response middleware
app.use(builderResponseMiddleware);
// Dependency Injection init
// app.use(dependencyInjection);

// Boot routes
registerRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`🚀 Server started at http://localhost:${port}`);
});
