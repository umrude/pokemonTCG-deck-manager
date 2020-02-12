const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require("morgan");
const db = require("./data/db.js"); // importing the db config

app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// Sample GET route
app.get("/api/test", (req, res) =>
  res.json({
    message: "we gud"
  })
);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
