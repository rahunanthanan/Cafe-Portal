// Importing important packages
const { Router } = require("express");
const { body, validationResult } = require("express-validator");

// Using express and routes
const cafeRouter = Router();

// Cafe module which is required and imported
const { Cafe } = require("./models/Cafe");

// To Get List Of Cafes
cafeRouter.route("/").get(function (req, res) {
  const location = req.query.location;

  Cafe.find({ location }, function (err, cafe) {
    if (err) {
      console.log(err);
      res.status(400).json({ message: err.message });
    } else {
      res.status(200).json(cafe);
    }
  }).populate("employees");
});

// To Create A Cafe
cafeRouter
  .route("/")
  .post(
    body("name").not().isEmpty().trim().escape(),
    body("description").trim().escape(),
    body("logo").trim().escape(),
    body("location").trim().escape(),
    function (req, res) {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Validation Failed",
          errors: errors.array(),
        });
      }

      Cafe.create(
        {
          logo: req.body.logo,
          name: req.body.name,
          location: req.body.location,
          description: req.body.description,
        },
        function (err, cafe) {
          if (err) {
            console.log(err);
            res.status(400).json({
              message: err.message,
            });
          } else {
            res.status(201).json(cafe);
          }
        }
      );
    }
  );

// To Get Cafe By Id
cafeRouter.route("/:cafeId").get(function (req, res) {
  Cafe.findById(req.params.cafeId, function (err, cafe) {
    if (err) {
      console.log(err);
      res.status(404).json({ message: err.message });
    } else {
      res.status(200).json(cafe);
    }
  });
});

// To Update Cafe By Id
cafeRouter
  .route("/:cafeId")
  .put(
    body("name").not().isEmpty().trim().escape(),
    body("description").trim().escape(),
    body("logo").trim().escape(),
    body("location").trim().escape(),
    function (req, res) {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Validation Failed",
          errors: errors.array(),
        });
      }

      Cafe.findOneAndUpdate(
        {
          _id: req.params.cafeId,
        },
        {
          logo: req.body.logo,
          name: req.body.name,
          location: req.body.location,
          description: req.body.description,
        },
        {
          returnOriginal: false,
        },
        function (err, cafe) {
          if (err) {
            console.log(err);
            res.status(400).json({ message: err.message });
          } else {
            res.status(200).json(cafe);
          }
        }
      );
    }
  );

// To Remove Cafe By Id
cafeRouter.route("/:cafeId").delete(function (req, res) {
  Cafe.findOneAndRemove(
    {
      _id: req.params.cafeId,
    },
    function (err, cafe) {
      if (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
      } else {
        res.status(200).json(cafe);
      }
    }
  );
});

module.exports = cafeRouter;
