const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authentification utilisateur
 *     description: Permet de récupérer un token JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@test.com
 *               password:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: Token JWT généré
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Identifiants invalides
 */
router.post("/", authController.login);

module.exports = router;
