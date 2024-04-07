const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for users (for demonstration)
let users = [];

// User registration endpoint
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user object
  const newUser = {
    username,
    email,
    password // In practice, password should be hashed and not stored directly
  };

  // Store user in memory
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});

// User sign-in endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  const user = users.find(user => user.email === email);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.status(200).json({ message: 'Login successful', user });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
