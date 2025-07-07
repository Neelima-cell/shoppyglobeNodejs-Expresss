# ShoppyGlobe E-commerce Backend

A Node.js, Express, and MongoDB backend API for the ShoppyGlobe E-commerce application.  
This project provides RESTful endpoints for product management, cart operations, and user authentication with JWT.

---

## 🚀 Features

- **Product Management:** Add, view, update, and delete products.
- **Cart Operations:** Add, update, remove, and view cart items (protected by JWT).
- **User Authentication:** Register and login with JWT-based authentication.
- **MongoDB Integration:** All data is stored in MongoDB collections.
- **Error Handling:** Centralized error middleware and input validation.
- **Tested with Thunder Client:** All endpoints tested and screenshots provided.

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors

---

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Neelima-cell/shoppyglobeNodejs-Expresss.git
   cd shoppyglobeNodejs-Expresss
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory:**
   ```
   MONGO_URI=mongodb://localhost:27017/shoppyglobe
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The server will run at [http://localhost:5000](http://localhost:5000)

---

## 🏗️ API Endpoints

### **Auth**
- `POST /register` — Register a new user
- `POST /login` — Login and receive a JWT token

### **Products**
- `GET /products` — Get all products
- `GET /products/:id` — Get a single product by ID
- `POST /products` — Add a new product

### **Cart** (Protected: requires `Authorization: Bearer <token>`)
- `POST /cart` — Add product to cart
- `GET /cart` — View current user's cart
- `PUT /cart/:id` — Update quantity of a cart item
- `DELETE /cart/:id` — Remove item from cart

---

## 🧪 API Testing

All endpoints have been tested using Thunder Client.  
**Screenshots of requests and responses are included in the `/screenshots` folder.**

---

## 🖥️ MongoDB Collections

- **products:**  
  Fields: `name`, `price`, `description`, `stock`
- **carts:**  
  Fields: `user`, `items` (array of `{ product, quantity }`)
- **users:**  
  Fields: `name`, `email`, `password`

---

## 📸 Screenshots

- Thunder Client API tests for all endpoints
- MongoDB Compass views of `products` and `carts` collections

---

## 📄 License

This project is for educational purposes.

---

## 🔗 Frontend

Frontend repo: [ShoppyGlobe React App](https://github.com/Neelima-cell/shopeglobal)

---

## 👩‍💻 Author

[Neelima-cell](https://github.com/Neelima-cell) 