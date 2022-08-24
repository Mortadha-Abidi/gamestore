const router = require("express").Router();

const adminControle = require('../controllers/product.controler.admin')

router.get("/products", adminControle.getALL);
router.post("/register", adminControle.register);
router.get("/login", adminControle.sessions);
router.post("/login", adminControle.loging);




module.exports = router;