const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
    res.sendFile('www/index.html', {root: __dirname});
});
app.listen(80, () => {
    console.log("listening on port 80");
});
