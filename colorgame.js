$(document).ready(function() {

    var colorOptions = ["red", "green", "yellow", "blue", "peachpuff"];
    var color = colorOptions[Math.floor(Math.random() * colorOptions.length)];

    $('#start').append('<span id = "red"></span>').children().last();
    $('#start').append('<span id = "green"></span>').children().last();
    $('#start').append('<span id = "yellow"></span>').children().last();
    $('#start').append('<span id = "blue"></span>').children().last();
    $('#start').append('<span id = "peachpuff"></span>').children().last();
    $('#color').text('Click on ' + color)



    $('#start span').on('click', function() {
        if ($(this).attr('id') == color) {
            $('#answer').text("Great Job!")
            color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            $('#color').text('Click on ' + color)

        } else {
            $('#answer').text("You Lose");

            color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            $('#color').text('Click on ' + color)

        }

    });

});
