const router = require("express").Router();
const auth = require("../middleware/auth");
const checkRole = require("../middleware/role");
const {
    getProducts, addProduct, updateProduct, deleteProduct
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/", auth, checkRole("admin"), addProduct);
router.put("/:id", auth, checkRole("admin"), updateProduct);
router.delete("/:id", auth, checkRole("admin"), deleteProduct);

module.exports = router;
