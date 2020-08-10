import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { router } from "./Routes/loginRoutes";

const app = express();
const port = 3000;

//The body property exist only because we have a middleware body parser
app.use(bodyParser.urlencoded({ extended: true }));
//Must be used afte the body parser
app.use(cookieSession({ keys: ["asdf"] }));
app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
