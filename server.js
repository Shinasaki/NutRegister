var express = require('express')
var app = express()
var bodyParser = require("body-parser");
var Datastore = require('nedb')
var db = new Datastore({ filename: 'data/database.db', autoload: true })

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jQuery')(window);



app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'))

app.post('/read', function(req, res) {
    console.log('read')
    db.find({}, function (err, docs) {
        res.json(docs)
    })
})

app.post('/check', function(req, res){
    
    db.insert(req.body, function(err, doc) {
        console.log('Data inserted!')
    })
    
    db.find({}, function (err, docs) {
        res.json(docs)
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
