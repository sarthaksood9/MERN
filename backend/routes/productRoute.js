const express=require("express");
const { getAllProtucts, createProduct } = require("../controllers/productController");

const router=express.Router();

router.route("/products").get(getAllProtucts);
router.route("/product/new").post(createProduct);

module.exports = router