const { model, Schema } = require("mongoose");

// List of columns for Employee schema
const Employee = new Schema(
 {
  name: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 10
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (v) => {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v);
      },
      message: 'Invalid email address'
    }
  },
  phone: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        return /^8\d{7}|9\d{7}$/g.test(v);
      },
      message: 'Invalid phone number'
    }
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  cafe: {
    type: Schema.Types.ObjectId,
    ref: 'Cafe'
  },
  },
  {
    collection: "employees",
  }
);

module.exports = model("Employee", Employee);
