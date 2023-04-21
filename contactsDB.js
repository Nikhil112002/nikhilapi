require("dotenv").config();
const connectDB = require("./db/connect")
const Contact = require("./models/contact")


const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL)
        await Contact.deleteMany();
        
        console.log("success");
    } catch (error) {
        console.log("Error is :",error)
    }
}
start();