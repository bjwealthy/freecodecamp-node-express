let express = require('express');
let app = express();

console.log("Hello World")

// app.get("/", (req, res) => {
//     res.send("Hello Express");
// });

app.get('/', (req, res) => {
    res.sendFile('views/index.html')
})




































 module.exports = app;
