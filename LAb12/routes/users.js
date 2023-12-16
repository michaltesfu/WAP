const express = require('express');
const router = express.Router();

// Sample user data (for demo purposes)
let users = [
  { id: 1, name: 'Michal', email: 'Michal@example.com' },
  { id: 2, name: 'Jossey', email: 'josseyn@example.com' },
  { id: 3, name: 'Helen', email: 'Helen@example.com' },
  { id: 4, name: 'Aida', email: 'Aida@example.com' },
  { id: 5, name: 'Herzon', email: 'Herzon@example.com' },
];

// GET request for /users - Get all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST request for /users - Add a new user
router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
