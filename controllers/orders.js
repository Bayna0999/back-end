import { users } from "./users.js";

// app.post("/order/create",
export let orders = [];
export const createOrder = (req, res) => {
  const { id, food, price } = req.body;
  let username = "";
  users.map((user) => {
    if (user.id == id) {
      username = user.username;
    }
  });
  orders.push({
    userId: id,
    name: username,
    food: food,
    price: price,
    createdAt: new Date(),
    updatedAt: Date.now(),
  });
  res.send({
    success: true,
    message: "order amjilttai",
  });
};

// app.get("/orders",
export const getOrders = (req, res) => {
  res.send(orders);
};
