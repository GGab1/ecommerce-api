const express = require("express");
const app = express();

app.use(express.json());

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

app.use("/products", productRoutes);
app.use("/orders", orderRoutes);
app.use("/login", authRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
