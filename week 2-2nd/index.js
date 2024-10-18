const express = require("express");

const app = express();
const PORT = 3000;
// Middleware to parse incoming JSON requests
app.use(express.json());

const productList = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
    },
    {
        id: 2,
        name: "Smartwatch",
        price: 149.99,
    },
    {
        id: 3,
        name: "Gaming Keyboard",
        price: 79.99,
    },
    {
        id: 4,
        name: "4K Monitor",
        price: 299.99,
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 59.99,
    },
];

app.get("/", (req, res) => {
    res.json({ productList });
});

app.get("/products", (req, res) => {
    res.json(productList);
});

app.post("/products", (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(400).json({ message: "Product name and price are required" });
    }

    const newProduct = {
        id: productList.length + 1,
        name,
        price,
    };
    productList.push(newProduct);
    res.status(201).json(newProduct);
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = productList.find((product) => product.id == id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    const product = productList.find((p) => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    if (!name || !price) {
        return res.status(400).json({ message: "Product name and price are required" });
    }

    product.name = name;
    product.price = price;

    res.json(product);
});

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;

    const productIndex = productList.findIndex((p) => p.id === parseInt(id));

    if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    productList.splice(productIndex, 1);
    res.status(201).json({ messag: "deleted" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
