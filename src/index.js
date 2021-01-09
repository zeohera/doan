const express = require('express')
const path = require('path')
var morgan = require('morgan')
var exphbs  = require('express-handlebars')
const { query } = require('express')
const { dirname } = require('path')
const app = express()
const port = 3000
const route = require('./routes')
// static
app.use(express.static(path.join(__dirname, 'public')))

// http logger
// app.use(morgan('combined'))

app.use(express.urlencoded(
  {
    extended: true
  }
));
app.use(express.json());


// template engine
app.engine('hbs', exphbs({
  extname:'.hbs'
}))
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/Views'))
console.log('PATH: ',path.join(__dirname, 'resources/Views'))

//route init

route(app)


//end route

//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})