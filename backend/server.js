import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Lesed1skh05',
    database: 'signup'
});

// Connect to database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Signup endpoint with debugging and additional validation
app.post('/signup', (req, res) => {
    console.log('Received signup request with body:', req.body);

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate request body for missing or invalid fields
    if (!req.body.name || !req.body.email || !req.body.password) {
        console.error('Missing required fields');
        return res.status(400).json({ error: "Missing required fields" });
    }

    if (!req.body.name.trim() || !email_pattern.test(req.body.email) || req.body.password.length < 8) {
        console.error('Invalid input data');
        return res.status(400).json({
            error: "Invalid input",
            details: {
                name: req.body.name.trim() ? null : "Name cannot be empty",
                email: email_pattern.test(req.body.email) ? null : "Invalid email format",
                password: req.body.password.length >= 8 ? null : "Password must be at least 8 characters"
            }
        });
    }

    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    console.log('Executing SQL with values:', values);

    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({
                error: "Error during signup",
                details: err.message
            });
        }
        console.log('Query successful:', data);
        return res.json({ message: "User registered successfully", data });
    });
});

// Start server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
