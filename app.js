const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;



app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));
app.use('/img',express.static(__dirname + 'public/assets'));
app.get("/",(req,res) => {
    res.sendFile("/index.html");
})

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})