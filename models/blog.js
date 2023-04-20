const mongoose = require("mongoose")
const productSchema1 = new mongoose.Schema({
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
    cover:{
        type: String,
    },
  });

module.exports = mongoose.model("Blog", productSchema1);
