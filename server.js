const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

// Configuration
const PORT = 3000;
const MONGODB_URI = 'mongodb://localhost:27017/Mini-project7';

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

const db = mongoose.connection;

// Define MongoDB Schema and Model
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

// Define API Endpoints

// Get all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Error fetching users');
        console.error('Error fetching users:', err);
    }
});

// Add a new user
app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        res.status(500).send('Error adding user');
        console.error('Error adding user:', err);
    }
});

// Fallback for serving 'users.json'
app.get('/users.json', (req, res) => {
    fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});
