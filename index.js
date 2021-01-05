const express = require('express')
const app = express()
const port = 3000

//route


app.get('/', (req, res) => {
  res.send('Hello World!')
})

//end route

//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})