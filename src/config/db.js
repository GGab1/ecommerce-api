const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerce",
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur connexion DB");
  } else {
    console.log("Connecté à la base de données");
  }
});

module.exports = connection;
