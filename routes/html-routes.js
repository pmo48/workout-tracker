// We need to include the path package to get the correct file path for our html
var path = require("path");
const router = require("express").Router();

//module.exports = function(app) {

  // GET index html
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //retrieves notes html
  router.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

  router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

//}
// If no matching route is found default to hom

module.exports = router;