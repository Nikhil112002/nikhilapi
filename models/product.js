  const mongoose = require("mongoose")
  const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    istrue: {
        type: Boolean,
        default: true,
    },
    description: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
    },
    about: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: true, 
    },
  });

module.exports = mongoose.model("Product", productSchema);

   