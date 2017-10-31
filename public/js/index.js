var db = {}

$(document).ready(function() {
   $('select').material_select();
   $('#submit').click(send);
   for (var i = 0; i < db.length; i++) {
       $('.container').append('<div></div>')
   }
});

function getData() {
    var lst = ['name', 'email', 'number', 'social', 'career', 'contact', 'when']
    var except = ['image']
    var data = {}
    for (var i = 0; i < lst.length; i++) {
        // console.log(lst[i]);
        data[lst[i]] = document.getElementById(lst[i]).value
    }
    // console.log(data);
    return data
}

function send() {
    var data = getData()
    $.post('/check',  data, function (result) {
        db = result
        console.log(resuldt);
    }, 'json');
}
