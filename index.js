import express, { json } from "express";
import { userRouter } from "./routers/users.js";
const app = express();

const port = 8989;

app.use(json());

app.use(userRouter);

app.listen(port, () => {
  console.log(`server running http://localhost:${port}/`);
});
