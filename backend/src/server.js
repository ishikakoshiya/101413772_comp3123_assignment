const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');  // Assuming employeeRoutes is in the 'routes' folder

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Backend is running!');
  });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employeeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use routes
app.use('/employees', employeeRoutes);

// Starting the server
app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
