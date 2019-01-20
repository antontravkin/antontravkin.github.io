window.onload = function(){

    function scrollFunction() {
        var s = $(window).scrollTop();
        console.log(s);

        $('.hello').css('transform', 'translate(' + -s + 'px, ' + s  + 'px)');
        $('.down').css('transform', 'translateY(' + s  + 'px)');
        if (s > 100)
            $('.down').fadeOut(400);
        else
            $('.down').fadeIn(400);
        if (s > 475)
            $('.hello').css('transform', 'translate(' + -475  + 'px, ' + s  + 'px)');
    }
    window.onscroll = scrollFunction; 

}