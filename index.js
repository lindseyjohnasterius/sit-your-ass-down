/*
  *** begin ascii art ***

          ,a8a,
         ,8" "8,                       8I
         d8   8b                       8I
         88   88                       8I
         88   88                       8I
         Y8   8P  ,ggg,,ggg,     ,gggg,8I   ,ggg,      ,gg,   ,gg
         `8, ,8' ,8" "8P" "8,   dP"  "Y8I  i8" "8i    d8""8b,dP"
    8888  "8,8"  I8   8I   8I  i8'    ,8I  I8, ,8I   dP   ,88"
    `8b,  ,d8b, ,dP   8I   Yb,,d8,   ,d8b, `YbadP' ,dP  ,dP"Y8,
      "Y88P" "Y88P'   8I   `Y8P"Y8888P"`Y8888P"Y8888"  dP"   "Y88

  *** end ascii art ***

  index.js,

  This is to wire together components and prototype quick ideas, not run the 
  business logic.

  Software is, above all things, a human / computer interface. This bundle of 
  text is your interface between the server and you: keep it clear and humane.

*/



const express = require( 'express' )
const app = express()
const server = require( 'http' ).Server( app )
const opn = require('better-opn');



let PORT = 9495





/*

  APP USE

  More on .use here: https://expressjs.com/en/guide/writing-middleware.html#writing-middleware-for-use-in-express-apps

  Mostly for declaring which resources are available to clients

*/

app.use(express.json())


app.get('/',(req,res) => { 
  
  res.sendFile(`${__dirname}/index.html`)
})

app.get(`/harangue.mp4`, (req, res) => {
  res.sendFile(`${__dirname}/harangue.mp4`)
})



app.listen(PORT,() => { 
    opn(`http://localhost:${PORT}`);
}) 

