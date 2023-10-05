let express = require('express');
let app = express();
const path = require("path")

const dotenv = require('dotenv')
dotenv.config({ path: './.env'})

console.log("Hello World")

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.get('/', (req, res) => {
    //res.sendFile(__dirname +'/views/index.html')
    res.send(process.env.MESSAGE_STYLE ? {"message": "HELLO JSON"} : {"message": "Hello json"})
})

app.use('/public', express.static(__dirname + '/public'))

const secret = process.env.MESSAGE_STYLE

app.get('/json', (req, res) => {
    
    if(secret==="uppercase"){
        res.json({"message": "HELLO JSON"})
    }else{res.json({"message": "Hello json"})  }
})


const port = 3000;
app.listen(port, () => {
  console.log(`Nodejs is listening on port ${port}...`);
});

 module.exports = app;
