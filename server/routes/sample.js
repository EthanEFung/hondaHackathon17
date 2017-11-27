//example route
const router = require("express").Router();
const controller = require("../controllers/sample");

router.get("/get", controller.get);

module.exports = router;
