// Importing important packages
const { Router } = require("express");
const { body, validationResult } = require("express-validator");

// Using express and routes
const employeeRouter = Router();

// Cafe module which is required and imported
const Cafe = require("./models/Cafe");
const Employee = require("./models/Employee");

// To Get List Of Employee
employeeRouter.route("/").get(function (req, res) {
  Employee.find(function (err, employee) {
    if (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    } else {
      res.status(200).json(employee);
    }
  });
});

// To Create A Cafe
employeeRouter.route("/").post(
  body("name").not().isEmpty().trim().escape(),
  body("email").not().isEmpty().isEmail().trim().escape(),
  body("cafe_id").not().isEmpty().trim().escape(),
  body("gender").isIn(["male", "female", "other"]),
  body("phone")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .matches(/^8\d{7}|9\d{7}$/g),
  function (req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation Failed",
        errors: errors.array(),
      });
    }

    Cafe.findById(req.body.cafe_id, function (err, cafe) {
      if (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
      } else {
        Employee.create(
          {
            cafe,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            gender: req.body.gender,
          },
          function (err, employee) {
            if (err) {
              console.log(err);
              res.status(400).json({
                message: err.message,
              });
            } else {
              res.status(201).json(employee);
            }
          }
        );
      }
    });
  }
);

// To Get Cafe By Id
employeeRouter
  .route("/:employeeId")
  .get(function (req, res) {
    Employee.findById(req.params.employeeId, function (err, employee) {
      if (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
      } else {
        res.status(200).json(employee);
      }
    });
  });

// To Update Cafe By Id
employeeRouter.route("/:employeeId").put(
  body("name").not().isEmpty().trim().escape(),
  body("email").not().isEmpty().isEmail().trim().escape(),
  body("cafe_id").not().isEmpty().trim().escape(),
  body("gender").isIn(["male", "female", "other"]),
  body("phone")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .matches(/^8\d{7}|9\d{7}$/g),
  function (req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Validation Failed",
        errors: errors.array(),
      });
    }

    Cafe.findById(req.body.cafe_id, function (err, cafe) {
      if (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
      } else {
        Employee.findOneAndUpdate(
          {
            _id: req.params.employeeId,
          },
          {
            cafe,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            gender: req.body.gender,
          },
          {
            returnOriginal: false,
          },
          function (err, employee) {
            if (err) {
              console.log(err);
              res.status(400).json({ message: err.message });
            } else {
              res.status(200).json(employee);
            }
          }
        );
      }
    });
  }
);

// To Remove Employee By Id
employeeRouter.route("/:employeeId").delete(function (req, res) {
  Employee.findOneAndRemove(
    {
      _id: req.params.employeeId,
    },
    function (err, employee) {
      if (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json(employee);
      }
    }
  );
});

module.exports = employeeRouter;
