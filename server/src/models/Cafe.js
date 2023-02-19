const { model, Schema } = require("mongoose");

// List of columns for Cafe schema
const Cafe = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 10,
    },
    description: {
      type: String,
      maxlength: 256,
    },
    logo: {
      type: String,
    },
    location: {
      type: String,
    },
    employees: [
      {
        type: Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
  },
  {
    collection: "cafes",
  }
);

module.exports = model("Cafe", Cafe);
