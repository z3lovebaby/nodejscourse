const express = require('express')
const morgan = require('morgan')
const path = require('path')
const hbs = require('express-handlebars');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'resources/public')))
//http logger
app.use(morgan('combined'))
//template engine
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
//set path
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/',(req,res)=>{res.render('home');})
app.get('/news',(req,res)=>{res.render('home1');})
app.listen(port,()=>console.log(`Exa,ple at http://localhost:${port}`))