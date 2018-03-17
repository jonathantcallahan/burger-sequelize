$(function() {
    $('#submit').click(function(){
    console.log('jeb')
    var burgerObj = {
            name: $('#burger-name').val().trim(),
            eaten: 1
        }
    $.ajax('/', {
        type: 'POST',
        data: burgerObj
    }).then(()=>{
        console.log('Burger added');
        location.reload()
    })
    });
    $('button').click(function(){
        var id = $(this).data('id');
        console.log(id)
        $.ajax('/' + id, {
            method: 'PUT'
        }).then(()=>{
            console.log(`You at burger ${id}`)
            location.reload();
        })
    })
})
    

