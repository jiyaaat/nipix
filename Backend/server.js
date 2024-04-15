const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// MongoDB connection URI (update with your MongoDB URI)
const mongoURI = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
let db;
MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db(); // Set the MongoDB database
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

// User registration endpoint
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if user already exists
  const existingUser = await db.collection('users').findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Insert new user into MongoDB
  const newUser = { username, email, password }; // Add password hashing for security
  await db.collection('users').insertOne(newUser);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// User sign-in endpoint
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user by email and password (add password hashing for security)
  const user = await db.collection('users').findOne({ email, password });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful', user });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
