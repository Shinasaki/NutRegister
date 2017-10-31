$(function(){
    $.post('/read', function (result) {
        var display = $('.collapsible')
        $.each(result, function( key, value ) {
            display.append(
                '<li>' +
                    '<div class="collapsible-header"><i class="material-icons">' + value.name + '</i></div>' +
                    '<div class="collapsible-body">' + 
                        '<span>Email: ' + value.email + '</span><br>' +
                        '<span>Name: ' + value.name + '</span><br>' +
                        '<span>Generation: ' + value.generation + '</span><br>' +
                        '<span>Social: ' + value.social + '</span><br>' +
                        '<span>Job: ' + value.job + '</span><br>' +
                        '<span>Tel: ' + value.tel + '</span><br>' +
                    '</div>' +
                '</li>'
            )
        })
    })
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
        var display = $('.collapsible')
        display.html(' ')
        $.each(result, function( key, value ) {
            display.append(
                '<li>' +
                    '<div class="collapsible-header"><i class="material-icons">' + value.name + '</i></div>' +
                    '<div class="collapsible-body">' + 
                        '<span>Email: ' + value.email + '</span><br>' +
                        '<span>Name: ' + value.name + '</span><br>' +
                        '<span>Generation: ' + value.generation + '</span><br>' +
                        '<span>Social: ' + value.social + '</span><br>' +
                        '<span>Job: ' + value.job + '</span><br>' +
                        '<span>Tel: ' + value.tel + '</span><br>' +
                    '</div>' +
                '</li>'
            )
        })
    })
}
