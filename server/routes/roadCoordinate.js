const router = require("express").Router();
const controller = require("../controllers/roadCoordinate");

router
  .get("/", (req, res) => res.sendStatus(200))
  .get("/getCollisionScore/:roadCoordinate", controller.getCollisionScore);

module.exports = router;
