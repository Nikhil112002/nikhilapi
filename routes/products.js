const express = require("express");
const router = express.Router();

const {getAllProducts,
    getAllProductsTesting,getAllBlogs} = 
    require("../controllers/products")

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route("/blogs").get(getAllBlogs);

module.exports = router;