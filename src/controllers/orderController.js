const db = require("../config/db");

// GET commandes
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
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// CREATE commande
exports.createOrder = (req, res) => {
  const { product_id, quantity } = req.body;

  // Vérification des champs
  if (!product_id || !quantity) {
    return res.status(400).json({ message: "Champs manquants" });
  }

  // Vérifier si produit existe + stock
  db.query(
    "SELECT stock FROM products WHERE id = ?",
    [product_id],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length === 0) {
        return res.status(404).json({ message: "Produit introuvable" });
      }

      const stock = result[0].stock;

      // Vérifier stock suffisant
      if (stock < quantity) {
        return res.status(400).json({ message: "Stock insuffisant" });
      }

      // Créer la commande
      db.query(
        "INSERT INTO orders (product_id, quantity) VALUES (?, ?)",
        [product_id, quantity],
        (err2, result2) => {
          if (err2) return res.status(500).json(err2);

          // Mettre à jour le stock produit
          db.query(
            "UPDATE products SET stock = stock - ? WHERE id = ?",
            [quantity, product_id],
            (err3) => {
              if (err3) return res.status(500).json(err3);

              return res.status(201).json({
                message: "Commande créée avec succès",
                orderId: result2.insertId,
              });
            },
          );
        },
      );
    },
  );
};
