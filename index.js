const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{return res.send('Hello W');})
app.listen(port,()=>console.log(`Exa,ple at http://localhost:${port}`))