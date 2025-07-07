const db = require("../db/database");

exports.getProducts = (req, res) => {
    const { page = 1, limit = 5, search = "", category } = req.query;
    const offset = (page - 1) * limit;
    let query = `SELECT * FROM products WHERE name LIKE ?`;
    let params = [`%${search}%`];

    if (category) {
        query += " AND category = ?";
        params.push(category);
    }

    query += " LIMIT ? OFFSET ?";
    params.push(Number(limit), offset);

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

exports.addProduct = (req, res) => {
    const { name, price, category, description } = req.body;
    db.run(`INSERT INTO products (name, price, category, description) VALUES (?, ?, ?, ?)`,
        [name, price, category, description],
        function (err) {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ id: this.lastID, name, price, category, description });
        }
    );
};

exports.updateProduct = (req, res) => {
    const id = req.params.id;
    db.get(`SELECT * FROM products WHERE id = ?`, [id], (err, product) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!product) return res.status(404).json({ msg: "Product not found" });

        const { name, price, category, description } = req.body;
        db.run(`UPDATE products SET name=?, price=?, category=?, description=? WHERE id=?`,
            [name, price, category, description, id],
            function (err) {
                if (err) return res.status(400).json({ error: err.message });
                res.json({ msg: "Product updated" });
            }
        );
    });
};


exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    db.get(`SELECT * FROM products WHERE id = ?`, [id], (err, product) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!product) return res.status(404).json({ msg: "Product not found" });

        db.run(`DELETE FROM products WHERE id = ?`, [id], function (err) {
            if (err) return res.status(400).json({ error: err.message });
            res.json({ msg: "Deleted" });
        });
    });
};

