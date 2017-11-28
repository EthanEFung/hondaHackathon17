//Node server
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;
const routes = require("./routes/index");

app
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, "../", "client")))
  .use(cors())
  .use("/", routes);

app.listen(PORT, err => {
  if (err) throw new Error("could not connect to port", PORT);
  console.log("listening on PORT", PORT);
});
