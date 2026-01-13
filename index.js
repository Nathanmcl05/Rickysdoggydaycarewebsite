const express = require("express")
var app = express()

app.set('view engine', 'ejs') // set template engine

app.get('/home', (req, res) => {

    res.render('home')
    
})


app.get('/about', (req, res) => {

    res.render('about')
    
})

//********************* Code to here *************/

app.listen(process.env.Port || 3000, process.env.IP || "0.0.0.0" , function(){
    console.log("New Full Demo is Live")
});
