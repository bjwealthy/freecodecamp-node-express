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

// app.use('/public', express.static(__dirname + '/public'))


// app.get('/json', (req, res) => {
//     console.log(req.url)
    
//     const ourSecret = process.env.MESSAGE_STYLE

//     if(ourSecret==="uppercase"){
//         res.json({"message": "HELLO JSON"})
//     }else{res.json({"message": "Hello jsonaa"})  }
// })


var message= 'Hello json';
app.get("/json", (req, res) => {
  if ( process.env['MESSAGE_STYLE'] === "uppercase") {
      res.json({ "message": message.toUpperCase() });
  }
  else {
    res.json({ "message": message });
  }
});

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Nodejs is listening on port ${port}...`);
// });





 module.exports = app;
