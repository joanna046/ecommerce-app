const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>E-Commerce Store</title>
      <style>
        body { font-family: Arial; text-align: center; background: #f5f5f5; }
        h1 { color: #333; }
        .product { 
          background: white; 
          padding: 20px; 
          margin: 20px; 
          display: inline-block; 
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        button {
          padding: 10px 20px;
          background: #28a745;
          color: white;
          border: none;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <h1>🛒 Joanna's E-Commerce Store</h1>

      <div class="product">
        <h2>iPhone 15</h2>
        <p>₹80,000</p>
        <button>Buy Now</button>
      </div>

      <div class="product">
        <h2>Headphones</h2>
        <p>₹2,000</p>
        <button>Buy Now</button>
      </div>

      <div class="product">
        <h2>Laptop</h2>
        <p>₹60,000</p>
        <button>Buy Now</button>
      </div>

      <p>🚀 Deployed using Docker & AWS EC2</p>
    </body>
    </html>
  `);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
