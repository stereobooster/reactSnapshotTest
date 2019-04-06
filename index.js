const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  //

  app.get('/somestaticpage', (req, res) => {
    console.log(req.URL)
    console.log(req.baseUrl)
    console.log(req.path)
    res.send("yeey")
  })

  app.get('*', (req, res) => {
    console.log(req.URL)
    console.log(req.baseUrl)
    console.log(req.path)

    res.sendfile(path.join(__dirname = 'client/build'+req.path+'.html'));
  })
}

app.get('/somestaticpage', (req, res) => {
  console.log(req.URL)
  console.log(req.baseUrl)
  console.log(req.path)
  res.send("yeey")
})

//build mode
app.get('*', (req, res) => {

  console.log(req)

  console.log(req.URL)
  console.log(req.baseUrl)
  console.log(req.path)

  console.log("aaaa")
  

  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})