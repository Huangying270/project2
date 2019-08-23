const express = require('express')
const path = require('path')
const { get } = require('request')

const app = express()

var PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const viewsDir = path.join(__dirname, '')
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './labeled_images')))
app.use(express.static(path.join(__dirname, './models')))

require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
