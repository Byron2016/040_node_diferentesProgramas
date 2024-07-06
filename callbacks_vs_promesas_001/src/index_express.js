const fs = require("node:fs");

const express = require("express");

const config = require("./config");

const PORT = config.port;
const app = express();

// Servir archivos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/users", (req, res) => {
  res.send([{ name: "aaaa" }, { name: "bbbb" }]);
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
