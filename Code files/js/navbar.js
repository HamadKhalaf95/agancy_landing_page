//0 to 480
$(window).scroll(function(e) {
	
    if ($(this).scrollTop() < 0.60*$(window).height()){
        $('#nav #bg').css({
            'opacity': '0'
        });
    }else{
        $('#nav #bg').css({
            'opacity': '1'
        });
    }
    $('.menu-text a').each(function() {
        if ($(this.hash).offset().top-$(this.hash).offset().top/10 <= $(window).scrollTop()){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        }
    });
});

$(document).ready(function($) {
    $('.menu-text a').each(function() {
        $(this).click(function(e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop:$(this.hash).offset().top
            },500);
        });
    });

});
