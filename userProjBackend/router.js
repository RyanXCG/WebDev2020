"use strict";
const express = require("express");
const router = express.Router();
const User = require("./user");

router.get("/users", (req, res) => {
  let regSearch = new RegExp("^" + req.query.search);
  User.find(
    {
      $or: [
        { firstName: regSearch },
        { lastName: regSearch },
        { sex: regSearch },
      ],
    },
    null,
    {
      sort: { [req.query.sortMethod]: req.query.sortDir },
      skip: (req.query.page - 1) * 5,
      limit: 5,
    },
    (err, users) => {
      if (err) {
        res.status(500).send(err);
        console.log(err);
      }
      res.status(200).json(users);
    }
  );
});

router.post("/", (req, res) => {
  const userToPost = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    sex: req.body.sex,
    age: req.body.age,
    password: req.body.password,
  });
  userToPost.save().then((user) => res.json(user));
});

router.put("/users/:id", (req, res) => {
  User.updateOne({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    sex: req.body.sex,
    age: req.body.age,
    password: req.body.password,
  })
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
});

router.delete("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    user
      .remove()
      .then(() =>
        res.json({
          success: true,
        })
      )
      .catch((err) => res.status(404).json({ success: false }));
  });
});

router.get("/users/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
