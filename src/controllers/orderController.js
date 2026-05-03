const { db } = require("../config/db");

// =========================
// GET commandes
// =========================
exports.getOrders = (req, res) => {
  const sql = `
    SELECT 
      orders.id,
      products.name,
      orders.quantity,
      orders.created_at
    FROM orders
    JOIN products ON orders.product_id = products.id
  `;

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        error: "Erreur serveur lors de la récupération des commandes",
      });
    }

    res.status(200).json(results);
  });
};

// =========================
// CREATE commande
// =========================
exports.createOrder = (req, res) => {
  const { product_id, quantity } = req.body;

  if (!product_id || !quantity) {
    return res.status(400).json({
      error: "product_id et quantity sont obligatoires",
    });
  }

  const checkProductSql = "SELECT stock FROM products WHERE id = ?";

  db.query(checkProductSql, [product_id], (err, result) => {
    if (err) {
      return res.status(500).json({
        error: "Erreur serveur lors de la vérification du produit",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        error: "Produit introuvable",
      });
    }

    const stock = result[0].stock;

    if (stock < quantity) {
      return res.status(400).json({
        error: "Stock insuffisant",
      });
    }

    const insertOrderSql =
      "INSERT INTO orders (product_id, quantity) VALUES (?, ?)";

    db.query(insertOrderSql, [product_id, quantity], (err2, result2) => {
      if (err2) {
        return res.status(500).json({
          error: "Erreur serveur lors de la création de la commande",
        });
      }

      const updateStockSql =
        "UPDATE products SET stock = stock - ? WHERE id = ?";

      db.query(updateStockSql, [quantity, product_id], (err3) => {
        if (err3) {
          return res.status(500).json({
            error: "Erreur lors de la mise à jour du stock",
          });
        }

        return res.status(201).json({
          message: "Commande créée avec succès",
          orderId: result2.insertId,
        });
      });
    });
  });
};
