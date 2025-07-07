const db = require("../db/database");

exports.placeOrder = (req, res) => {
    const userId = req.user.id;
    const now = new Date().toISOString();

    db.run(`INSERT INTO orders (user_id, created_at) VALUES (?, ?)`, [userId, now], function (err) {
        if (err) return res.status(400).json({ error: err.message });
        const orderId = this.lastID;

        db.all(`SELECT * FROM cart WHERE user_id = ?`, [userId], (err, items) => {
            if (!items.length) return res.status(400).json({ msg: "Cart empty" });

            const stmt = db.prepare(`INSERT INTO order_items (order_id, product_id, quantity) VALUES (?, ?, ?)`);
            items.forEach(item => stmt.run(orderId, item.product_id, item.quantity));
            stmt.finalize();

            db.run(`DELETE FROM cart WHERE user_id = ?`, [userId]);
            res.json({ msg: "Order placed", orderId });
        });
    });
};
