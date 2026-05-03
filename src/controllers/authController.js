const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@test.com" && password === "1234") {
    const token = jwt.sign({ email }, "secret_key", { expiresIn: "1h" });

    return res.json({ token });
  }

  return res.status(401).json({ message: "Identifiants incorrects" });
};
