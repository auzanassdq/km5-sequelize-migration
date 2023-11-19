const express = require("express");
const allRoutes = require("./routes")

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json())
app.use(allRoutes)

app.listen(PORT, () => {
  console.log("running...");
});