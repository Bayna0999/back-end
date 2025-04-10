import express from "express";
import { createOrder, getOrders } from "../controllers/orders.js";

export const orderRouter = express.Router();

orderRouter.post("/order/create", createOrder).get("/orders", getOrders);
