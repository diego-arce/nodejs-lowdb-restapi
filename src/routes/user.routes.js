const { Router } = require('express');
const router = Router();

const { getUsers, getUser, createUser, updateUser, deleteTask } = require('../controllers/user.controller');

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteTask);

module.exports = router;