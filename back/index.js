const dbConfig = require("./src/config/dbConfig");
const app = require("./src/server");

dbConfig()
  .then(() => {
    app.listen(3000, (res) => {
      console.log("Database access successful")
    });
  })
  .catch((error) => {
    throw error;
  });
