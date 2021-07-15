const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Hi, I'm FoodPenguin Server`);
});

app.get("/greet/:name", (req, res) => {
  res.send(`Greeting!, ${req.params.name}`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
