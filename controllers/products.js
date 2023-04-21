const Product = require("../models/product")
const Blog = require("../models/blog")
const Contact = require("../models/contact")

const getAllProducts = async(req,res) => {
    const {category,authorName,title} = req.query;
    const queryObject = {};

    if (category){
        queryObject.category = category;
        console.log(queryObject.category)
    }
    if(authorName){
        queryObject.authorName = {$regex:authorName, $options: "i"};
    }
    if(title){
        queryObject.title = title;
    }
    console.log(queryObject);

    const myData = await Product.find(queryObject);
    res.status(200).json({myData})

};

const getAllProductsTesting = async(req,res) => {
    const myBlog = await Product.find(req.query); 
    res.status(200).json({myBlog})
};
const getAllBlogs = async(req,res) => {
    const myBlog = await Blog.find(req.query); 
    res.status(200).json({myBlog})
};
const getContactData = async(req,res) => {
    const {name,email,phone,message} = req.body;
    // console.log(req.body);
    //create an instance of Contact
    const user = new Contact({
        name:name,email:email,phone:phone,message:message
    })
    //save instance in db
    await user.save();
    res.send("success")
};


module.exports = {getAllProducts,getAllProductsTesting,getAllBlogs,getContactData}