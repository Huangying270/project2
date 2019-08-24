var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
     app.get('/sign', (req, res) => res.sendFile(path.join(__dirname,"../signup.html")))

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
    app.get("/models", function (req, res) {
        res.sendFile(path.join(__dirname, "../models"));
    });
    app.get("/sign", function (req, res) {
        res.sendFile(path.join(__dirname, "../signup.html"));
    });
    app.get("/scriptSaveImage.js", function (req, res) {
        res.sendFile(path.join(__dirname, "../scriptSaveImage.js"));
    });
};
