const db = require("../config/db");

// GET produits
exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

// POST produit
exports.createProduct = (req, res) => {
  const { name, price, stock } = req.body;

  const sql = "INSERT INTO products (name, price, stock) VALUES (?, ?, ?)";
  db.query(sql, [name, price, stock], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Produit ajouté" });
  });
};

// GET produit par ID
exports.getProductById = (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM products WHERE id = ?", [id], (err, results) => {
    if (err) return res.status(500).json(err);

    if (results.length === 0) {
      return res.status(404).json({ message: "Produit non trouvé" });
    }

    res.json(results[0]);
  });
};

// DELETE produit
exports.deleteProduct = (req, res) => {
  const id = req.params.id;

  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Produit supprimé" });
  });
};

// UPDATE produit
exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const { name, price, stock } = req.body;

  const sql = "UPDATE products SET name = ?, price = ?, stock = ? WHERE id = ?";

  db.query(sql, [name, price, stock, id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Produit mis à jour" });
  });
};
