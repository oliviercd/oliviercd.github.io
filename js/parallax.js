$(document).ready(function()
{
    $(window).bind('scroll',function(e)
    {
        parallaxScroll();
    });
 
    function parallaxScroll()
	{
        var scrolledY = $(window).scrollTop();
        $('.background').css('background-position','center -'+((scrolledY*0.2))+'px');
        $('.bluestripe').css('top','-'+((scrolledY*0.5))+'px');
        $('.greenstripe').css('top','-'+((scrolledY*0.8))+'px');
    }
 
});