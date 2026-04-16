const express = require('express');
const app = express();

// Route
app.get('/', (req, res) => {
  res.send('Joanna Saji - Deployment Success 🚀');
});

// IMPORTANT: bind to 0.0.0.0 for EC2/Docker
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
