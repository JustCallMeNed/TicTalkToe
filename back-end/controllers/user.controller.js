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
exports.findAll = (req, res) => {
  const userName = req.query.userName;
  var condition = userName
    ? { userName: { [Op.like]: `%${userName}%` } }
    : null;

  User.findAll({ where: condition })
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

exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "User was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
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
