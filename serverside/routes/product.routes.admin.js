const router = require("express").Router();

const adminControle = require('../controllers/product.controler.admin')


router.get("/", adminControle.getALL);



module.exports = router;