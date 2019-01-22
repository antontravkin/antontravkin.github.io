window.onload = function(){
    $('.hello').css('transform', 'translateX(' + 230 + 'px)');
    function scrollFunction() {
        var s = $(window).scrollTop();
     
        console.log(s);
        $('.hello').css('transform', 'translate(' + (-s + 230) + 'px, ' + s  + 'px)');
        $('.down').css('transform', 'translateY(' + s  + 'px)');
        $('.wrap_item1').css('transform', 'translateY(' + s  + 'px)');
        $('.mac').css('transform', 'translateY(' + s  + 'px)');
        if (s > 100)          
            $('.down p, .down i').css('opacity', 0).css ('transition-duration', '.5s');
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
            $('.macbook').css('opacity', 1).css ('transition-duration', '.5s');
        }
        else{
            $('.macbook').css('opacity', 0).css ('transition-duration', '.5s');
        }
        if (s > 400){
            $('.macbook').css('opacity', 0).css ('display', 'none');
            $('.code').css('display', 'block');
        }
        else{
            $('.code').css('display', 'none');
            $('.macbook').css('display', 'block').css ('transition-duration', '.5s');
        }

        if (s > 500){
            $('.hello').css('transform', 'translateY(' + 500  + 'px)');
            $('.down').css('transform', 'translateY(' + 500 + 'px)');
            $('.wrap_item1').css('transform', 'translateY(' + 500  + 'px)');
            $('.mac').css('transform', 'translateY(' + 500  + 'px)');
        }
            
        

    }
    window.onscroll = scrollFunction; 

}