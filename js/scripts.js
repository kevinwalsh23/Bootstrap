$(document).ready(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#loginclose').click(function() {
        //console.log("clicked");
        $('#loginModal').modal('hide');
    });
    $('#loginbutton').click(function() {
        //console.log("clicked");
        $('#loginModal').modal('show');
    });
    $('#cancelmodal').click(function() {
        //console.log("clicked");
        $('#loginModal').modal('hide');
    });
    $('#reservetog').click(function() {
        //console.log("clicked");
        $('#tablereserve').modal('show');
    });
    $('#reservehide').click(function() {
        //console.log("clicked");
        $('#tablereserve').modal('hide');
    });
    


    $('#carousel-button').click(function() {
        if ($('#carousel-button').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carousel-button').children('span').removeClass('fa-pause');
            $('#carousel-button').children('span').addClass('fa-play');
        }
        else if ($('#carousel-button').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa-play');
            $('#carousel-button').children('span').addClass('fa-pause');
    
        }
    });


});


