window.onload = function(){
    $('.hello').css('transform', 'translateX(' + 230 + 'px)');
    function scrollFunction() {
        var s = $(window).scrollTop();
     
        console.log(s);
        $('.hello').css('transform', 'translate(' + (-s + 230) + 'px, ' + s  + 'px)');
        //$('.hello').css('transition-timing-function', 'step-start');
        $('.down').css('transform', 'translateY(' + s  + 'px)');
        $('.wrap_item1').css('transform', 'translateY(' + s  + 'px)');
        $('.mac').css('transform', 'translateY(' + s  + 'px)');
        if (s > 100)          
            $('.down p, i').css('opacity', 0).css ('transition-duration', '.5s');
        else
            $('.down p, i').css('opacity', 1);
        if (s > 230){
            $('.hello').css('transform', 'translate(' + 0  + 'px, ' + s  + 'px)');
            $('.wrap_item1 h1, .developer').css('opacity', 1).css ('transition-duration', '.5s');
        }
        else{
            $('.wrap_item1 h1, .developer').css('opacity', 0).css ('transition-duration', '.5s');
        }
        if (s > 300){
            $('.mac img').css('opacity', 1).css ('transition-duration', '.5s');
        }
        else{
            $('.mac img').css('opacity', 0).css ('transition-duration', '.5s');
        }
            
        

    }
    window.onscroll = scrollFunction; 

}