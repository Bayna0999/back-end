import express, { json } from "express";
import { userRouter } from "./routers/users.js";
import { orderRouter } from "./routers/orders.js";
import { config } from "dotenv";
import cors from "cors";
config();

const port = process.env.PORT;
const app = express();
app.use(cors());
app.use(json());

app.use(userRouter);
app.use(orderRouter);

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
});
