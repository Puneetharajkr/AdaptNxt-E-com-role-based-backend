# 📘 AdaptNxt E-Commerce API Documentation
This document provides detailed information about all available API endpoints, including success and failure cases.

**Generated on:** 2025-07-07 08:34:14

## `POST` http://localhost:5000/api/auth/register

**Description:** Register API and both Customer and Admin can reqgister using this API end point
**Auth Required:** ❌

**Request Body (JSON):**
```json
{
  "name": "Bob",
  "email": "bob@example.com",
  "password": "bob123",
  "role": "admin"
}
```

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `POST` http://localhost:5000/api/auth/login

**Description:** both Customer or User and Admin can Login using this API end point
**Auth Required:** ❌

**Request Body (JSON):**
```json
{
  "email": "bob@example.com",
  "password": "bob123"
}
```

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `POST` http://localhost:5000/api/products

**Description:** This is Add Product API, here Only Admin can add products and Admin can do all operations on this API that is product
**Auth Required:** ✅

**Request Body (JSON):**
```json
{
  "name": "Wrist Watch",
  "price": 1599,
  "category": "accessories",
  "description": "Elegant analog watch"
}
```

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `PUT` http://localhost:5000/api/products/4

**Description:** Admin can update the products
**Auth Required:** ✅

**Request Body (JSON):**
```json
{
  "name": "Wrist Watch Pro",
  "price": 1899,
  "category": "accessories",
  "description": "Updated elegant watch"
}
```

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `DELETE` http://localhost:5000/api/products/4

**Description:** Admin can delete the product
**Auth Required:** ✅

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `GET` http://localhost:5000/api/products

**Description:** Both Admin as well as Customer or User can get/read/retrive/view the list of products
**Auth Required:** ✅

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `POST` http://localhost:5000/api/auth/login

**Description:** Now the Customer/User is going to Login to do his operations as Customer/User such as CART related, ORDER related
**Auth Required:** ❌

**Request Body (JSON):**
```json
{
  "email": "alice@example.com",
  "password": "alice123"
}
```

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `POST` http://localhost:5000/api/cart/add

**Description:** Customer/User can add Prducts or Items to his CART
**Auth Required:** ✅

**Request Body (JSON):**
```json
{
  "product_id": 2,
  "quantity": 3
}
```

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `GET` http://localhost:5000/api/products

**Description:** Customer/User can also see/read/retrive/view the list of products as Admin can see
**Auth Required:** ✅

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `GET` http://localhost:5000/api/cart

**Description:** Customer/User can get/see/view the cart list/details/items
**Auth Required:** ✅

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `POST` http://localhost:5000/api/cart/remove

**Description:** The Customer/User can Remove his Cart Items by providing his corresponding Cart id
**Auth Required:** ❌

**Headers:**
- `Authorization`: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzUxODczNTYyfQ.WKN5PY33HBpMVliD0VYeJDV-teC9hEfdDjn6pPiR3yo`

**Request Body (JSON):**
```json
{
  "product_id": 3
}
```

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---

## `POST` http://localhost:5000/api/orders

**Description:** The Customer/User Can place the Order using Order API endpoint
**Auth Required:** ✅

**Success Response:**
```json
{ "msg": "Success message or response object" }
```

**Failure Response:**
```json
{ "msg": "Error message or validation failure" }
```

---
