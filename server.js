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

app.post('/check', function(req, res){
    
    db.insert(req.body, function(err, doc) {
        console.log('Data inserted!')
    })
    
    db.find({}, function (err, docs) {
        // var display = $('.display')
        $.each(docs, function(key, value) { // idk how to send data to view
            console.log('ID: ' + key)
            console.log('Email: ' + value.email + ' Name: ' + value.name) 
            

            // $('.display').html(
            //     '<div class="box">' +
            //         '<div class="col s3">ID: ' + key + '</di>' +
            //         '<div class="col s3">Email: ' + value.email + '</div>' +
            //         '<div class="col s3">Tel: ' + value.tel + '</div>' + 
            //     '</div>'
            // )
        })
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
