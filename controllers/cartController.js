const db = require("../db/database");

exports.getCart = (req, res) => {
    db.all(`SELECT c.id, c.quantity, p.name, p.price FROM cart c 
            JOIN products p ON c.product_id = p.id 
            WHERE c.user_id = ?`, [req.user.id], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.addToCart = (req, res) => {
    const { product_id, quantity } = req.body;

    db.get(`SELECT * FROM products WHERE id = ?`, [product_id], (err, product) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!product) return res.status(404).json({ msg: "Product not found" });

        db.run(`INSERT INTO cart (user_id, product_id, quantity) VALUES (?, ?, ?)`,
            [req.user.id, product_id, quantity],
            function (err) {
                if (err) return res.status(400).json({ error: err.message });
                res.json({ msg: "Added to cart" });
            }
        );
    });
};


exports.removeFromCart = (req, res) => {
    const { product_id } = req.body;

    db.get(`SELECT * FROM cart WHERE user_id = ? AND product_id = ?`, [req.user.id, product_id], (err, item) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!item) return res.status(404).json({ msg: "Item not found in cart" });

        db.run(`DELETE FROM cart WHERE user_id = ? AND product_id = ?`,
            [req.user.id, product_id],
            function (err) {
                if (err) return res.status(400).json({ error: err.message });
                res.json({ msg: "Removed from cart" });
            }
        );
    });
};

