const express = require('express')
const app = express()
const path = require('path');

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/templates/index.html')))
app.use('/js', express.static(path.join(__dirname, 'js')))
app.use('/css', express.static(path.join(__dirname, 'css')))

app.listen(8080, () => console.log('Example app listening on port 8080!'))
