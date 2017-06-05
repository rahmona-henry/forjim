const express = require('express')
const app = express()

app.get('/',function(req,res){
  res.send('Hello Lower Shotover')
})

app.listen(3000, function(){
  console.log('Snapping photos on port 3000')
})
