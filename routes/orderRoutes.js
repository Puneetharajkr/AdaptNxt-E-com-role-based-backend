const router = require("express").Router();
const auth = require("../middleware/auth");
const { placeOrder } = require("../controllers/orderController");

router.post("/", auth, placeOrder);

module.exports = router;
