const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const productController = require("../controllers/productController");

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Récupère tous les produits
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Liste des produits
 */
router.get("/", productController.getProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Récupère un produit par ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produit trouvé
 *         tags: [Products]
 */
router.get("/:id", productController.getProductById);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crée un produit
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - stock
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Produit créé
 */
router.post("/", auth, productController.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Met à jour un produit
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du produit à modifier
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - stock
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Produit mis à jour
 *       404:
 *         description: Produit non trouvé
 */
router.put("/:id", auth, productController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Supprime un produit
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du produit à supprimer
 *     responses:
 *       200:
 *         description: Produit supprimé
 *       404:
 *         description: Produit non trouvé
 */
router.delete("/:id", auth, productController.deleteProduct);

module.exports = router;
