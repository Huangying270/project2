var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // app.get('/index.html', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))

    // ---------------------------------------------------------------------------

    app.get("/face-api.min.js", function (req, res) {
        res.sendFile(path.join(__dirname, "../face-api.min.js"));
    });
    app.get("/script.js", function (req, res) {
        res.sendFile(path.join(__dirname, "../script.js"));
    });
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });
    app.get("./models", function (req, res) {
        res.sendFile(path.join(__dirname, "../models"));
    });
};
