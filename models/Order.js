const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);
module.exports = Order;
