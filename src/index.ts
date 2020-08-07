import express, { Request, Response } from "express";
import bodyParser from "body-parser";

import { router } from "./Routes/loginRoutes";

const app = express();
const port = 3000;

//The body property exist only because we have a middleware body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
