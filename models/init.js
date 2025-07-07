const db = require("../db/database");
const bcrypt = require("bcryptjs");

db.serialize(() => {
  // Users
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, email TEXT UNIQUE, password TEXT, role TEXT
  )`);

  const password = bcrypt.hashSync("admin123", 10);
  db.run(`INSERT OR IGNORE INTO users (name, email, password, role)
    VALUES ('Admin', 'admin@example.com', ?, 'admin')`, [password]);

  // Products
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, price REAL, category TEXT, description TEXT
  )`);

  // Cart
  db.run(`CREATE TABLE IF NOT EXISTS cart (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER, product_id INTEGER, quantity INTEGER
  )`);

  // Orders
  db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER, created_at TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS order_items (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER, product_id INTEGER, quantity INTEGER
  )`);
});
