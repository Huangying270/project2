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


app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});


// ==========================================================================

var multer = require('multer')
var dir = "";

var mkdirp = require('mkdirp');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, './labeled_images'))
  },
  filename: function (req, file, cb) {
    cb(null, "1.jpg")
  }
})

const fs = require('fs-extra')
const upload = multer({ storage: storage })

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // <!-- need to add something so that when this happens an entry is added to a mysql database -->
  console.log(req.body.username)
  dir = req.body.username.toString()
  mkdirp(path.join(__dirname, './labeled_images', dir), function (err) {
    if (err) console.error(err)
    else {
      console.log('pow!')
      fs.move(
        path.join(__dirname, './labeled_images', '1.jpg'),
        path.join(__dirname, './labeled_images',dir, '1.jpg'), { overwrite: true }, err => {
          if (err) return console.error(err)
          console.log('success!')
        })
    }
  });
})

// ==========================================================================

fs.readdirSync("labeled_images/").forEach(file => {
  console.log(file);
});





