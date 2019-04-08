const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;



//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})


//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/users', (req, res) => {

  const users = [
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "d", age:23},
    {name: "ze", age:23},
    {name: "a", age:23},
    {name: "b", age:23},
    {name: "c", age:23},
    {name: "micael", age:44}
  ]

  console.log(JSON.stringify(users))

  res.json(JSON.stringify(users))

})


app.get('/somestaticpage', (req, res) => {
  console.log(req.URL)
  console.log(req.baseUrl)
  console.log(req.path)
  res.send("yeey")
})

//production mode
if(process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname + '/client/build'+req.path+'.html'));

    // n teria de ser assim? 
    // res.sendFile(path.join(__dirname + `/client/build${req.path}/${req.path}.html`));
  })
}

else {
  app.get('*', (req, res) => {

    res.sendFile(path.join(__dirname+'/client/public/index.html'));
  })
}




