$(function(){
    $('.form-signin').submit(function(event) {
        // Stop event (html redirect when form submit)
        event.preventDefault()
        
        // Get form data
        var formData = $(this).serialize()

        exportData(formData)
    })
})

function exportData(data) {
    $.post('/check', data, function (result) {
        console.log('send data to /check success!')
    })
}
