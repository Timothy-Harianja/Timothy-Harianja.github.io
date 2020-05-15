var pContainerHeight = $('.background-image').height();

$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    if (wScroll <= pContainerHeight) {
        $('.logo').css({
            'transform' :  'translate(0px, '+ wScroll/2 +'%)'
        });
    
        $('.back-bird').css({
            'transform' : 'translate(0px, '+ wScroll/4 +'%)'
        });
    
        $('.fore-bird').css({
            'transform' : 'translate(0px, -'+ wScroll/40 +'%)'
        });
    }

    if(wScroll > $('.tech-list').offset().top - ($(window).height() / 1.2)) {

        $('.tech-list figure').each(function(i) {

            setTimeout(function() {
                $('.tech-list figure').eq(i).addClass('is-showing');
            }, 150 * (i+1));
            //(700 * (Math.exp(i * 0.14))) - 700
            //150 * (i+1)
        });

    }

    if(wScroll > $('.large-window').offset().top - $(window).height()) {
        //the 90 next to offset().top depends on picture's size
        $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top + 70)+ 'px'});
        
        var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
        $('.window-tint').css({'opacity': opacity});

    }

    if(wScroll > $('.single-project').offset().top - $(window).height()) {

        var offset = Math.min(0, wScroll - $('.single-project').offset().top + $(window).height() - 400);
        var offsetRot = Math.min(0, (wScroll - $('.single-project').offset().top + $(window).height() - 400) * 0.3);

       if ((offset <= 0) && (offsetRot <= 0)) {
            var techSpan = document.getElementsByClassName("span-display");
            for (i = 0; i < techSpan.length; i++) {
                techSpan[i].classList.remove("span-display")
            }
            $('.post-1').css({'transform': 'translate(' + offset +'px, '+ Math.abs(offset * 0.4) +'px) rotate(' + offsetRot +'deg)'});
            $('.post-2').css({'transform': 'translate( 0px, '+ offset * 0.2 +'px)' });
            $('.post-3').css({'transform': 'translate(' + Math.abs(offset) +'px, '+ Math.abs(offset * 0.4) +'px) rotate(' + -offsetRot +'deg)'});
       }

        
    }

});