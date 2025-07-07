const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./ecommerce.db", (err) => {
    if (err) return console.error(err.message);
    console.log("Connected to SQLite DB.");
});

module.exports = db;
