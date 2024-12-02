
const express = require('express');
const router = express.Router();

const employees = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com' }
];

router.get('/', (req, res) => {
  res.json(employees);
});

router.post('/', (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

module.exports = router;
