let express = require('express');
const fs = require("node:fs");
const app = express();
app.use(express.json());
const port = 4000;

const productsFile = './data/products.json';
let products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

app.get('/', (req, res) => {
    res.status(200).json({ message: "Server Running!", college: "KMIT" });
});

app.get('/contact', (req, res) => {
    res.send("<h1>Don't Contact Us</h1>");
});

app.get('/products', (req, res) => {
    console.log("Requested for all products!");
    if (!products || products.length === 0) {
        res.status(404).json({ message: "No products found." });
    } else {
        res.status(200).json(products);
    }
});

app.post('/products', (req, res) => {
    const product = req.body;

    let newId = 0;
    products.forEach(p => {
        if (p.id > newId) newId = p.id;
    });
    product.id = newId + 1;
    products.push(product);

    fs.writeFile(productsFile, JSON.stringify(products, null, 2), (err) => {
        if (err) {
            console.error("Error writing to file", err);
            res.status(500).json({ message: "Failed to add product" });
        } else {
            res.status(200).json({ message: "Product Added!", product });
        }
    });
});

app.get('/products/:id', (req, res) => {
    console.log("Requested for product " + req.params.id);
    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
        res.status(404).json({ message: "Product not found" });
    } else {
        res.status(200).json(product);
    }
});

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});
