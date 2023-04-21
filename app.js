require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect")
const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");
//send data from backend to frontend
//install cors
//require cors
const cors=require("cors");
//use the cors in app
app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
res.send("Hii I am live");
});
// set router
app.use("/api/products",products_routes);


const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
            console.log(`${PORT} Yes I am connected`);
        });
    }catch(error){
        console.log(error);
    }
};

start();