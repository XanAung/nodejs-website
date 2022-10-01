const express = require('express');
const app = express();
const port = 5000;

app.get('', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || port, ()=>{
    console.log('Server is starting at port 5000 ....');
});