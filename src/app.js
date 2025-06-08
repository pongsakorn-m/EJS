const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const app = express();

// DB connection
const db = mysql.createConnection({
  host: 'db',
  user: 'demo',
  password: 'demo123',
  database: 'demo_db'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.send('Error fetching data');
    res.render('index', { users: results });
  });
});

app.post('/add', (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], err => {
    if (err) return res.send('Insert error');
    res.redirect('/');
  });
});

// Start
app.listen(3000, () => console.log('App running on http://localhost:3000'));
