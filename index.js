const express = require("express")
var app = express()

app.set('view engine', 'ejs') // set template engine

app.use(express.static("public")); 

app.get('/', (req, res) => {
    res.render('home')
})


app.get('/booking', (req, res) => {
    res.render('booking')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/log', (req, res) => {
    res.render('log')
})



//********************* Code to here *************/

app.listen(process.env.Port || 3000, process.env.IP || "0.0.0.0" , function(){
    console.log("New Full Demo is Live")
});