let express = require('express');
let app = express();

console.log("Hello World")

app.send('/', () => {
    console.log('Hello Express')
})




































 module.exports = app;
