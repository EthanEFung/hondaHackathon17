const router = require("express").Router();

router
  .get("/", (req, res) => res.sendStatus(200))
  .use("/roadCoordinate", require("./roadCoordinate"));

module.exports = router;
