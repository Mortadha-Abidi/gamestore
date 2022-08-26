const router = require("express").Router();

const adminControle = require('../controllers/product.controler.admin')
router.get("/users", adminControle.getAllUsers);
router.get("/products", adminControle.getAllProducts);
router.post("/register", adminControle.register);
router.get("/login", adminControle.sessions);
router.post("/login", adminControle.loging);
router.get("/admin",adminControle.getadmin)
router.put("/update/:id",adminControle.Update)
router.post("/add",adminControle.addProduct)




module.exports = router;