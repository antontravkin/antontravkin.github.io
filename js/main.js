$(document).ready(function() {
    

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
	$('.about__info').on('click', '.info', function() {
        $(this).toggleClass('text_red').siblings('.info__text').slideToggle(400);
        $(this).find('i').toggleClass('fa-minus-circle').toggleClass('fa-plus-circle');
    });

 
	
    var a = true;   
    function x(){
        var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-36251023-1']);
            _gaq.push(['_setDomainName', 'jqueryscript.net']);
            _gaq.push(['_trackPageview']);
        $('.circlechart').circlechart(); 
        (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
        a = false;
    } 
    
    var $win = $(window);
    var $marker = $('.skills');
    $win.scroll(function() {
        if($win.scrollTop() + $win.height() >= $marker.offset().top) {
            if(a)
                x();
        }
    });
    
    
    
});