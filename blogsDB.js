require("dotenv").config();
const connectDB = require("./db/connect")
const Blog = require("./models/blog")
const BlogJson = require("./blogs.json")

const start = async ()=>{
    try {
        await connectDB(process.env.MONGODB_URL)
        await Blog.deleteMany();
        await Blog.create(BlogJson);
        console.log("success");
    } catch (error) {
        console.log("Error is :",error)
    }
}
start();