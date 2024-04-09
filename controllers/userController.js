const Order = require("../models/Order");
const User = require("../models/User");

// Create New User
exports.createNewUser = async (req, res) => {
  let { firstName, lastName, productName } = req.body;

  console.log(req.body);

  try {
    let userInfo = {
      firstName,
      lastName,
      orders: [],
    };
    if (productName) {
      let order = new Order({
        firstName,
        lastName,
        productName,
      });
      await order.save();

      let user = new User({
        firstName,
        lastName,
        orders: [order._id],
      });
      await user.save();

      res.status(200).json(order);
    } else {
      let user = new User({
        userInfo,
      });
      await user.save();
      res.status(200).json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
