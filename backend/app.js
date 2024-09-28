const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://deepdyadav:anushka06@cluster0.8znd3pm.mongodb.net/ideathon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Create a registration schema and model
const registrationSchema = new mongoose.Schema({
  teammate1: {
    name: { type: String, required: true },
    registerNumber: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    mobile: { type: String, required: true },
  },
  teammate2: {
    name: String,
    registerNumber: String,
    department: String,
    mobile: String,
  },
});

const Registration = mongoose.model('Registration', registrationSchema);

// Handle form submission
app.post('/register', async (req, res) => {
  const { teammate1, teammate2 } = req.body;

  try {
    const newRegistration = new Registration({
      teammate1,
      teammate2,
    });

    await newRegistration.save();
    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error saving registration:', error);
    res.status(400).json({ error: 'Registration failed. Duplicate registration number or email.' });
  }
});

// Start server
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
