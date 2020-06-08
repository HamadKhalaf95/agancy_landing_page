$(document).ready(function(){
    $('.tab').each(function(index, el) {
        $(this).click(function(){
            $($('.obj').get(index)).siblings().removeClass('active');
            $(this).siblings().removeClass('active');

            $(this).addClass('active');
            setTimeout(function(){
                $($('.obj').get(index)).addClass('active');
            }, 400);
        });
    });

});
