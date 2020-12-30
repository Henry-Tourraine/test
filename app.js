const express = require('express')
app = express();


app.get('/', (req, res)=>{
    res.send("CONNECTED")
})

port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log("Connecté !")})