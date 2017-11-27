const router = require("express").Router();

router.use("/sample", require("./sample"));

router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
