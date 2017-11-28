const router = require("express").Router();

router.use("/intersection", require("./roadCoordinate"));

router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
