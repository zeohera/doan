const express = require('express')
const path = require('path')
var morgan = require('morgan')
var exphbs  = require('express-handlebars')
const app = express()
const port = 3000
app.use(morgan('combined'))

// template engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars');
app.set('view',path.join(__dirname,'resources/views'))
//route


app.get('/', (req, res) => {
  res.render('home');
})

//end route

//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})