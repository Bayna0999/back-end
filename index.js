import express, { json } from "express"
import { v4 as uuidv4 } from 'uuid';

const port = 8989;
const app = express();
app.use(json());
let users = [];
app.post("/user/create",(req,res)=>{
    const {username,gender,age,email} =req.body
    console.log( req.body, 'body');
    users.push({
        username,gender,age,email,id:uuidv4()
    })
    res.send({
        success:true,
        message:"success"
    })
})

app.get("/users",(req,res)=>{
    res.send(users);
})
app.get("/user",(req,res)=>{
    const searchId = users.find((user)=>  user.id == req.body.id)
    res.send(searchId);
})

app.delete("/user/delete",(req,res)=>{
    const {id} = req.body
    users = users.filter((user)=> user.id !== id);
    res.send({
        success:true,
        message:"amjilttai ustlaa",
    });
})

app.put("/user/update",(req,res)=>{
    const { id, username, email,gender,age } = req.body
    users.map((user)=> {
        if(user.id === id){
            user.username = username;
            user.email = email;
            user.gender = gender;
            user.age = age;
        }
        return user
    });
    res.send({
        success:true,
        message:"amjilttai update hiigdlee",
    });
})


// app.get("/",(req,res)=>{
//     res.send("hello world");
// });
app.listen(port,()=>{
    console.log(`server running http://localhost:${port}/`);
})