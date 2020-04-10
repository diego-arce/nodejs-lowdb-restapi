const { getConnection } = require('../database');
const { v4 } = require('uuid');

const getUsers = (req, res) => {
  const users = getConnection().get('users').value();
  res.json(users);
};

const getUser = (req, res) => {
  const user = getConnection().get('users').find({ id: req.params.id }).value();
  res.json(user);
};

const createUser = (req, res) => {
  const newUser = {
    id: v4(),
    username: req.body.username,
    password: req.body.password
  };
  getConnection().get('users').push(newUser).write();
  res.json(newUser);
};

const updateUser = (req, res) => {
  const result = getConnection().get('users').find({ id: req.params.id })
    .assign(req.body)
    .write();
  res.json(result);
};

const deleteTask = (req, res) => {
  const result = getConnection().get('users').remove({ id: req.params.id }).write();
  res.json(result);
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteTask,
}