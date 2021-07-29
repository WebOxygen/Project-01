// minimum two digits
function minTwoDigits(n) {
	return (n < 10 ? '0' : '') + n;
}

(function () {
	"use strict";
	
    jQuery(document).ready(function($){
		
		/*Popover*/
		$('[data-toggle="popover"]').popover(
    		{
			html : true,
			trigger: 'focus',
			//trigger :'manual',
			content: function() {
				var content = $(this).attr("data-popover-content");
				return $(content).children(".popover-body").html();
			}
	    });
		
		$('[data-toggle="tooltip"]').tooltip();
		 
		//For mobile menu
		$( "#navigation" ).clone().prependTo( $( ".nav-mobile" ) ); 
        //For mobile menu
		$( "#navigation2" ).clone().prependTo( $( ".mobile-nav2" ) ); 
        $('.mobile-nav2-icon').on('click', function () {
			$('.mobile-nav2').toggleClass('active');
		 });

		//Main Slider
        $(".home-banner").slick({
            slidesToShow: 1,
			arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            draggable: false,
            //touchMove: false,
			fade: true,
			prevArrow: $('.first-slide-prev'),
		    nextArrow: $('.first-slide-next')
        });

	   // hero 3
	   (function () {
		 var hero = $('.js-hero-3');
		 if (hero.length) {
			var slider = hero.find('.js-hero-3-slider'),
			    prevArrow = hero.find('.js-hero-3-prev'),
			    nextArrow = hero.find('.js-hero-3-next'),
			    current = hero.find('.js-hero-3-current'),
			    total = hero.find('.js-hero-3-total'),
			    dots = hero.find('.js-hero-3-dots'),
			    play = hero.find('.js-hero-3-play'),
			    previews = hero.find('.js-hero-3-previews'),
			    items = slider.find('> div');

			total.text(minTwoDigits(items.length));

			slider.slick({
				infinite: true,
				swipe: false,
				arrows: false,
				dots: true,
				appendDots: dots
			});

			previews.slick({
				infinite: true,
				swipe: false,
				arrows: false,
				initialSlide: 1
			});

			prevArrow.on('click', function () {
				slider.slick('slickPrev');
				previews.slick('slickPrev');
			});

			nextArrow.on('click', function () {
				slider.slick('slickNext');
				previews.slick('slickNext');
			});

			slider.on('afterChange', function (event, slick, currentSlide) {
				play.attr('href', items.eq(currentSlide).data('play'));
			});
		 }
	    })();

		//WOW animation
		new WOW().init();
		
		$(".scrollup").on("click", function() {
			$("body,html").stop(false, false).animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		$(window).on('scroll',function() {
		  if ($(this).scrollTop() > 40){  
			  $('header.for-sticky').addClass("sticky");
		     } else {
			  $('header.for-sticky').removeClass("sticky");
		   }
		   
		   if ($(this).scrollTop() > 200) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		
       $('li.megamenu').click(function() {
            $(this).find('.megamenu-block').toggleClass("active"); 
          });  
		
    });

}(jQuery));	


var offsetTop = $(".container").offset().top;
$(window).scroll(function() {
  var height = $(window).height();
  if ($(window).scrollTop() + height > offsetTop) {
    jQuery(".progress-bar").each(function() {
      jQuery(this).find(".progress-content").animate(
        {
          width: jQuery(this).attr("data-percentage")
        },
        2000
      );

      jQuery(this).find(".progress-number-mark").animate(
        {
          left: jQuery(this).attr("data-percentage")
        },
        {
          duration: 2000,
          step: function(now, fx) {
            var data = Math.round(now);
            jQuery(this).find(".percent").html(data + "%");
          }
        }
      );
    });
  }
});


