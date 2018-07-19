var socket = io();
socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected to server');
});

socket.on('newMessage', function (email) {
    console.log('New email', email);
    var li = jQuery('<li></li>')
    li.text(`${email.from}: ${email.text}`);
    jQuery('#messages').append(li)
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('newMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function (data) {

    });
})

