# 🛒 AdaptNxt E-Commerce Backend (SQLite + Node.js + Express.js)

This is a backend API project built for the AdaptNxt E-Commerce assignment. It handles **user authentication**, **role-based access**, **product management**, **cart**, and **order placement** features using **Node.js**, **Express**, and **SQLite**.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- SQLite3
- JWT (Authentication)
- bcrypt.js (Password Hashing)
- dotenv (Environment variables)
- CORS
- Postman (for API testing)

---

## 📁 Folder Structure

```
backend/
│
├── API_Documentation/
├── Postman_Collection/
├── controllers/       # Route handlers
├── db/                # SQLite DB connection
├── middleware/        # Auth & role middlewares
├── models/            # Table creation & seed
├── routes/            # Route definitions
├── .env               # Environment variables
├── .env.example
├── server.js          # Entry point
└── package.json
```

---

## ⚙️ Setup Instructions

```bash
# 1. Clone the repo
git clone <your-repo-url>
cd backend

# 2. Install dependencies
npm install

# 3. Setup environment variables
touch .env
```

### 🔐 .env File Example:

```env
PORT=5000
JWT_SECRET=adaptnxtsecret
```

```bash
# 4. Start the server
node server.js
# OR for development
npx nodemon server.js
```

Server runs at: `http://localhost:5000`

---

## 🧠 Authentication

- On **register** or **login**, you'll receive a JWT token.
- Pass the token in `Authorization` header like:

```
Authorization: Bearer <your_token_here>
```

---

## 📌 API Endpoints Summary

| Method | Endpoint                          | Role     | Description                            | JSON Body Required |
|--------|-----------------------------------|----------|----------------------------------------|--------------------|
| POST   | `/api/auth/register`              | Any      | Register as customer or admin          | ✅                |
| POST   | `/api/auth/login`                 | Any      | Login & receive JWT token              | ✅                |
| GET    | `/api/products`                   | Public   | View product listings                  | ❌                |
| POST   | `/api/products`                   | Admin    | Add new product                        | ✅                |
| PUT    | `/api/products/:id`               | Admin    | Update existing product by ID          | ✅                |
| DELETE | `/api/products/:id`               | Admin    | Delete product by ID                   | ❌                |
| GET    | `/api/cart`                       | Customer | View your cart                         | ❌                |
| POST   | `/api/cart/add`                   | Customer | Add product to cart                    | ✅                |
| POST   | `/api/cart/remove`                | Customer | Remove product from cart               | ✅                |
| POST   | `/api/orders`                     | Customer | Place order from current cart          | ❌                |

---

## 🧪 Sample Request Bodies

### ✅ Register

```json
{
  "name": "Alice",
  "email": "alice@example.com",
  "password": "alice123",
  "role": "customer"
}
```

### ✅ Login

```json
{
  "email": "alice@example.com",
  "password": "alice123"
}
```

### ✅ Add Product (Admin)

```json
{
  "name": "Gaming Laptop",
  "price": 69999,
  "category": "electronics",
  "description": "Powerful gaming laptop"
}
```

### ✅ Update Product (Admin)

```json
{
  "name": "Gaming Laptop Pro",
  "price": 74999,
  "category": "electronics",
  "description": "Updated high-performance laptop"
}
```

### ✅ Add to Cart (Customer)

```json
{
  "product_id": 1,
  "quantity": 2
}
```

### ✅ Remove from Cart (Customer)

```json
{
  "product_id": 1
}
```

---

## 📮 Postman Collection

📥 You can import the complete Postman collection for testing all API endpoints:

**🔗 [Download Postman Collection – AdaptNxt E-Com Backend](./AdaptNxt%20E-Com%20Backend.postman_collection.json)**

### How to Use:
1. Open Postman → Click **Import**
2. Select this file
3. Set environment variables for:
   - `admin_token`
   - `customer_token`
4. Each request has headers, token, and body pre-filled for easy testing

---

## 📘 API Documentation

A fully detailed API documentation in Markdown format is included:

**🔗 [View Full API Docs – AdaptNxt_API_Documentation.md](./AdaptNxt_API_Documentation.md)**

It covers:
- Request methods
- Required headers and body
- Sample success & error responses
- Admin vs Customer behavior
- Role-based route permissions

---

## 🛠 Testing Tips

- Always include the `Authorization` header for protected routes.
- Admin can:
  - Add, edit, delete products
- Customer can:
  - View products, manage cart, place order
- Use correct `product_id` values (e.g., 1, 2) — others will trigger validation errors as expected.

---

## 📞 Support

If you face issues:
- Check `.env` and JWT token headers
- Review the API docs or Postman examples
- Ensure SQLite file (`ecommerce.db`) is generated

---

## ✅ Final Notes

- This project is beginner-friendly and follows clean modular practices.
- It's extensible for future features like:
  - Order history
  - Payment integration
  - Email notifications

---

🔐 Built with ❤️ for AdaptNxt by Puneetharaj K R



## 📞 Contact
Name: Puneetharaj K R
GitHub: @Puneetharajkr
Email: puneetharajkr123@gmail.com
