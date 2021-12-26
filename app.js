const express = require('express');

const port = process.env.PORT || 4000;

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from the internet")

})
app.listen(port, function(){
    console.log("app is listening..");
})