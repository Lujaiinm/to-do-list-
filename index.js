
$(function(){

    // Click to submit search form
    $('#input').click(function(){
        //submit form here
    });

    // Fade out default text 
    $('#search_field').focus(function(){
        if($(this).val() == 'Search items...')
        {
            $(this).animate({
                opacity:0
            },200,function(){
                $(this).val('').css('opacity',1);
            });
        }
    });
});