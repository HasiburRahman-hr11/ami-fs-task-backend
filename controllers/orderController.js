const Order = require("../models/Order");

// Create New Order
exports.createNewOrder = async (req, res) => {
  let { firstName, lastName } = req.body;

  try {
    let order = new Order({
      firstName,
      lastName,
      productName,
    });
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
