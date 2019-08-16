const express = require('express')
const path = require('path')
const { get } = require('request')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const viewsDir = path.join(__dirname, '')
app.use(express.static(viewsDir))
app.use(express.static(path.join(__dirname, './labeled_images')))
app.use(express.static(path.join(__dirname, './models')))
app.use(express.static(path.join(__dirname, './test_images')))


app.get('/', (req, res) => res.redirect('/index.html'))
app.get('/index.html', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))
app.get('/takepicture.html', (req, res) => res.sendFile(path.join(viewsDir, 'takepicture.html')))
app.get('/personalInfo.html', (req, res) => res.sendFile(path.join(viewsDir, 'personalInfo.html')))
app.get('/stt.js', (req, res) => res.sendFile(path.join(viewsDir, 'stt.js')))

app.listen(3000, () => console.log('Listening on port 3000!'))

