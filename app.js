const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
router.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page</h1>');
});

router.get('/contact', (req, res) => {
  res.send('<form method="POST" action="/contact"><input type="text" name="name"/><button type="submit">Submit</button></form>');
});

router.post('/contact', (req, res) => {
  const name = req.body.name;
  res.send(`<h2>Thanks, ${name}!</h2>`);
});

// Serve static HTML file (if exists)
router.get('/html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/', router);

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
