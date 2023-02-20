const { model, Schema } = require("mongoose");
const { EmployeeSchema } = require("./Employee");

// List of columns for Cafe schema
const Cafe = new Schema(
  {
    employees: [EmployeeSchema],
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
  },
  {
    collection: "cafes",
  }
);


module.exports.CafeSchema = Cafe;

module.exports.Cafe = model("Cafe", Cafe);
