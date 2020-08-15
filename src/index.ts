import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { router } from "./routes/loginRoutes";
import "./controllers/LoginController";
import { AppRouter } from "./AppRouter";

const app = express();
const port = 3000;

//The body property exist only because we have a middleware body parser
app.use(bodyParser.urlencoded({ extended: true }));
//Must be used afte the body parser
app.use(cookieSession({ keys: ["asdf"] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
