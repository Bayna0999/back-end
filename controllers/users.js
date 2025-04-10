// app.post("/user/create",

import { v4 as uuidv4 } from "uuid";
export let users = [];
export const createUser = (req, res) => {
  const { username, gender, age, email } = req.body;
  console.log(req.body, "body");
  users.push({
    username,
    gender,
    age,
    email,
    id: uuidv4(),
  });
  res.send({
    success: true,
    message: "success",
  });
};

// app.get("/users",
export const getUsers = (req, res) => {
  res.send(users);
};
// app.get("/user",
export const getUserById = (req, res) => {
  const { id } = req.params;
  const searchId = users.find((user) => user.id === id);
  res.send(searchId);
};

// app.delete("/user/delete",
export const deleteUser = (req, res) => {
  const { id } = req.body;
  users = users.filter((user) => user.id !== id);
  res.send({
    success: true,
    message: "amjilttai ustlaa",
  });
};

// app.put("/user/update",
export const updateUser = (req, res) => {
  const { id, username, email, gender, age } = req.body;
  users.map((user) => {
    if (user.id === id) {
      user.username = username;
      user.email = email;
      user.gender = gender;
      user.age = age;
    }
    return user;
  });
  res.send({
    success: true,
    message: "amjilttai update hiigdlee",
  });
};
