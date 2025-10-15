const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from CI/CD Pipeline!');
});

app.get('/about', (req, res) => {
  res.send('This is a sample Node.js app for Jenkins CI/CD.');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app; // exported for testing
