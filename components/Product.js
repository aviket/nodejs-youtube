// products.js

const productsPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Products Page</title>
    <style>
        /* Add your inline styles here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 20px;
        }
        .product-card {
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 10px;
            margin-bottom: 20px;
        }
        .product-name {
            font-weight: bold;
        }
        .product-description {
            color: #777;
        }
        .alert-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="product-card">
        <h2 class="product-name">Product 1</h2>
        <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button class="alert-button" onclick="showAlert('Product 1')">Show Alert</button>
    </div>
    <div class="product-card">
    <h2 class="product-name">Product 2</h2>
    <p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <button class="alert-button" onclick="showAlert('Product 1')">Show Alert</button>
</div>
<div class="product-card">
<h2 class="product-name">Product 3</h2>
<p class="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<button class="alert-button" onclick="showAlert('Product 1')">Show Alert</button>
</div>
    <!-- Repeat similar product cards for other products -->
</body>
</html>
`;

// Export the productsPage
module.exports = (req, res) => {res.send(productsPage)};


