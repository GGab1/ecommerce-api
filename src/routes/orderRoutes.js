const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Liste des commandes
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Liste des commandes
 */
router.get("/", orderController.getOrders);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Créer une commande
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - product_id
 *               - quantity
 *             properties:
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Commande créée
 *       400:
 *         description: Stock insuffisant
 */
router.post("/", orderController.createOrder);

module.exports = router;
