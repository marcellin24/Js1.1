const dbc= require('./NodeMongoose2');

const { json } = require('express');
const express = require('express');
const cors = require('cors')
const app = express();
//comment the 1 line
//comement the 21 line

app.use(express.json()); // this middleware is needed to parse request body as JSON
app.use(cors());

app.get('/home', (req, res) => {
    const userId = req.query.id;
    // do something with userId 
    res.send('User with id ' + userId + ' retrieved successfully');
  });

app.post('/addusers', (req, res) => {
  const userData = req.body;
  console.log(JSON.stringify(req.body.name));
  // do something with userData
 // res.send('User created successfully' +JSON.stringify(req.body));
 //call your db module
 //dbconnect
let x = dbc.dbconnect(req.body,"create",res);
 res.send( x);

});


app.post('/updateusers', (req, res) => {
  const userData = req.body;
  
 dbc.dbconnect(req.body,"update",res);
 res.send('User Object sent successfully to node js' + req.body.name);
});

//below method will be get
app.get('/getallusers',  (req, res) =>  {
  const userData = req.body;
   let x = dbc.dbconnect("0","getall",res);

   

 //res.send(x);
});

//use applicaiton/json in body content type when testing from advanced rest client

app.listen(3005, () => console.log('Server running on port 3005'));

