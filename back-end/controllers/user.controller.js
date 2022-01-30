const db = require("../models");
const User = db.User;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const user = {
    username: req.body.userName,
    password: req.body.password,
  };
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Gig.",
      });
    });
  console.log(req.body);
};

exports.getUser = async () => {
  const user = await User.findOne({ where: { username: "Batman" } });
  if (user === null) {
    console.log("Not found");
  } else {
    console.log(user instanceof User);
    console.log(user.username);
  }
};
exports.findOne = async (req, res) => {
  const userName = await User.findOne({});

  if (!userName) {
    return res.status(400).send({
      message: `No user found with the id`,
    });
  }

  return res.send(userName);
};

exports.findOne = (req, res) => {
  const userName = req.query.id;
  var condition = userName
    ? { user: { [Op.like]: `%${req.query.id}%` } }
    : null;

  User.findOne({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while finding the Gig.",
      });
    });
  console.log(this.findAll);
};

exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

// exports.get = (req, res) => {
//   const user = {
//     username: req.body.userName,
//     password: req.body.password,
//   };
//   User.get(user)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while reading the Gig.",
//       });
//     });
//   console.log(req.body);
// };

// current login page is only creating users. Isn't fucntioning as reading existing users from the table.
//  get post put delete
