const mongoose = require("mongoose")
const productSchema2 = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    phone: {
        type: Number,
        
    },
    message: {
        type: String,
        
    },
  });

module.exports = mongoose.model("Contact", productSchema2);