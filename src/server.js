const app = require("./app");
const { waitForDB } = require("./config/db");

const PORT = 3000;

waitForDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
