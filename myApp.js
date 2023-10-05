let express = require('express');
let app = express();

console.log("Hello World")

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

app.get('/', (req, res) => {
    //res.sendFile(__dirname +'/views/index.html')
    res.send(process.env.MESSAGE_STYLE ? {"message": "HELLO JSON"} : {"message": "Hello json"})
})

app.use('/public', express.static(__dirname + '/public'))


app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE==="uppercase"){
        res.json({"message": "Hello json".toUpperCase()})
    }res.json({"message": "Hello json"})  
})


































 module.exports = app;
