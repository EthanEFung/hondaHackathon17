const router = require("express").Router();
const controller = require("../controllers/roadCoordinate");

router.get("/", (req, res) => {
  res.send("specify query");
});

router.get("/getCollisionScore/", controller.getCollisionScore);

module.exports = router;
