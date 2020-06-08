$(document).ready(function(){
    $('.skip').each(function(index, el) {
        $(this).click(function() {
            if( (index != 2 && index != 5 && index != 8) ) {
                $(this).parent().parent().removeClass('active');
                $($('.card.skips').get(index+1)).addClass('active');
            }
        });
    });

});
