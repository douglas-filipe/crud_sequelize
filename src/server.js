import app from "./app.js";
import sequelize from "./config/db.js";

try {
  //sequelize.sync();
  sequelize.authenticate();
  app.listen("5555", () => {
    console.log("App is running...");
  });
} catch (e) {
  console.log(e);
}
