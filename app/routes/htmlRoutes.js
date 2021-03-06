// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/under-construction", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/under-construction.html"));
  });

  app.get("/app", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index-app.html"));
  });

  app.get("/new", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
  });

  app.get("/lander", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/lander.html"));
  });

  app.get("/new-site", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/horizontal.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};