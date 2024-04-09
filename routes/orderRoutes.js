const { createNewOrder, getAllOrders } = require("../controllers/orderController");

const router = require("express").Router();

router.post("/order/create", createNewOrder);
router.get("/order/get-all", getAllOrders);

module.exports = router;
