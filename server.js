var express = require('express')
var app = express()
var bodyParser = require("body-parser");
var Datastore = require('nedb')
var db = new Datastore({ filename: 'data/database.db', autoload: true })

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/check', function(req, res){
    // console.log(req.body);
    db.insert(req.body, function(err, doc) {
        console.log('Inserted');
    });
    db.find({}, function (err, docs) {
        // console.log(docs)
        res.json(docs)
    });
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
