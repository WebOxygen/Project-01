(function ($) {
	"use strict";

    
    jQuery(document).ready(function($){
		

       //For mobile menu
		$( "#navigation" ).clone().prependTo( $( ".nav-mobile" ) ); 
		$( ".np7-pro-img" ).clone().prependTo( $( ".np7-pro-items-mobile" ) ); 
        
       $('.choose-product-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          fade: true,
          prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-arrow-left''></i></button>",
		  nextArrow: "<button type='button' class='slick-next'><i class='fas fa-arrow-right'></i></button>",  
          asNavFor: '.choose-product-nav'
        });
        $('.choose-product-nav').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          asNavFor: '.choose-product-for',
          dots: false,
          arrows: false,  
          centerMode: true,
          focusOnSelect: true
        });
        
       $('.hp-fobo-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          fade: true,
          prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-arrow-left''></i></button>",
		  nextArrow: "<button type='button' class='slick-next'><i class='fas fa-arrow-right'></i></button>",  
          asNavFor: '.hp-fobo-nav'
        });
        $('.hp-fobo-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.hp-fobo-for',
          dots: false,
          arrows: false,  
          centerMode: true,
          focusOnSelect: true
        });
        
        
       $('.np5-hp-fobo-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
          fade: true,
          prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		  nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",  
          asNavFor: '.np5-hp-fobo-nav'
        });
        $('.np5-hp-fobo-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.np5-hp-fobo-for',
          dots: false,
          arrows: false,  
          centerMode: true,
          focusOnSelect: true
        });
        
       $('.np4-hp-fobo-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          fade: true,
          prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-arrow-left''></i></button>",
		  nextArrow: "<button type='button' class='slick-next'><i class='fas fa-arrow-right'></i></button>",  
          asNavFor: '.np4-hp-fobo-nav'
        });
        
        $('.np4-hp-fobo-nav').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.np4-hp-fobo-for',
          dots: false,
          arrows: false,  
          centerMode: true,
          focusOnSelect: true
        });
        
         $(".stories-items").slick({
            slidesToShow: 1,
			arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });
        
        $(".hero-banner-slider").slick({
            slidesToShow: 1,
			arrows: false,
            dots: false,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });
        
        $(".np4-banner-fobo-slider").slick({
            slidesToShow: 1,
			arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });
        
         $(".bloggers-items").slick({
            slidesToShow: 4,
			arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                //arrows: false,
                slidesToShow: 3
              }
            },{
              breakpoint: 991,
              settings: {
                //arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 380,
              settings: {
                //arrows: false,
                slidesToShow: 1
              }
            } 
          ] 
        });
        
        $(".np5-pf-items").slick({
            slidesToShow: 3,
			arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                //arrows: false,
                slidesToShow: 3
              }
            },{
              breakpoint: 991,
              settings: {
                //arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                //arrows: false,
                slidesToShow: 1
              }
            } 
          ] 
        });
        
        $(".np5-pp-items").slick({
            slidesToShow: 3,
			arrows: true,
            dots: false,
            autoplay: true,
            infinite: true,
            //draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                //arrows: false,
                slidesToShow: 3
              }
            },{
              breakpoint: 991,
              settings: {
                //arrows: false,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                //arrows: false,
                slidesToShow: 1
              }
            } 
          ] 
        });
        
        $(".np5-footer-top-items").slick({
            slidesToShow: 4,
			arrows: false,
            dots: false,
            autoplay: false,
            infinite: true,
            draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                //arrows: false,
                slidesToShow: 3
              }
            },{
              breakpoint: 991,
              settings: {
                //arrows: false,
                slidesToShow: 2,
                dots: true,  
              }
            },
            {
              breakpoint: 580,
              settings: {
                //arrows: false,
                slidesToShow: 1,
                dots: true,
              }
            } 
          ] 
        });
        
        
        $(".np7-healthy-slider").slick({
            slidesToShow: 1,
			arrows: false,
            dots: true,
            autoplay: false,
            infinite: true,
            draggable: false,
            touchMove: false,
            animateOut: 'slide',
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
        });
        
         $('.new-product-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          fade: true,
          prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-arrow-left''></i></button>",
		  nextArrow: "<button type='button' class='slick-next'><i class='fas fa-arrow-right'></i></button>",  
          asNavFor: '.new-product-nav'
        });
        $('.new-product-nav').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          asNavFor: '.new-product-for',
          dots: false,
          arrows: false,  
          centerMode: true,
          focusOnSelect: true
        });
        
        $(".np7-pro-items-mobile").slick({
            slidesToShow: 3,
			arrows: true,
            dots: false,
            autoplay: false,
            infinite: true,
            draggable: false,
            touchMove: false,
            animateOut: 'slide',
            adaptiveHeight: true,
			//fade: true,
			prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-chevron-left'></i></button>",
		    nextArrow: "<button type='button' class='slick-next'><i class='fas fa-chevron-right'></i></button>",
            responsive: [
            {
              breakpoint: 1024,
              settings: {
                //arrows: false,
                slidesToShow: 3,
                  adaptiveHeight: true,
              }
            },{
              breakpoint: 991,
              settings: {
                //arrows: false,
                slidesToShow: 2,
                dots: false,  
              }
            },
            {
              breakpoint: 767,
              settings: {
                //arrows: false,
                slidesToShow: 1,
                dots: false,
              }
            } 
          ] 
        });
        
        $('.np8-fobo-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
          fade: true,
          prevArrow: "<button type='button' class='slick-prev'><i class='fas fa-arrow-left''></i></button>",
		  nextArrow: "<button type='button' class='slick-next'><i class='fas fa-arrow-right'></i></button>",  
          asNavFor: '.np8-fobo-nav'
        });
        
        $('.np8-fobo-nav').slick({
          slidesToShow: 6,
          slidesToScroll: 1,
          asNavFor: '.np8-fobo-for',
          dots: false,
          arrows: false,  
          centerMode: true,
          focusOnSelect: true
        });
        
        
		//WOW animation
		new WOW().init();
		
		$(".scrollup").on("click", function() {
			$("body,html").stop(false, false).animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		$(window).on('scroll',function() {
		  if ($(this).scrollTop() > 0){  
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
     
      $('.continueBtn').on('click', function() {
			var id = $(this).attr('data-id');
			if(quiz_check(id) != false){
			   $('.take-our-item.active').removeClass('active').next('.take-our-item').addClass('complete active');
			}
            if(quiz_check2(id) != false){
			   $('.take-our-item.active').removeClass('active').next('.take-our-item').addClass('complete active');
			}
            if(quiz_check3(id) != false){
			   $('.take-our-item.active').removeClass('active').next('.take-our-item').addClass('complete active');
			}
      });

      $('.backBtn').on('click', function() {
        $('.take-our-item.active').removeClass('complete active').prev('.take-our-item').addClass('active');
      });
      
      $('.take-down').on('click', function() {
          $('.take-our-item').removeClass('active')
          $(this).parent().addClass('active');
       });
        
      function quiz_check(id){
		if(!$('input:radio[name=quiz'+id+']').is(':checked')){
			$('input:radio[name=quiz'+id+'] + label').addClass('error');
			return false;
		}else {
		  $('input:radio[name=quiz'+id+'] + label').removeClass('error');
		}
	  }  
      function quiz_check2(id){
        if(!$('input:text[name=quiz'+id+']').val()){
			$('input:text[name=quiz'+id+']').addClass('error');
			return false;
		}else {
		  $('input:text[name=quiz'+id+']').removeClass('error');
		}  
	  } 
      function quiz_check3(id){
		if(!$('input:checkbox[name=quiz'+id+']').is(':checked')){
			$('input:checkbox[name=quiz'+id+'] + label').addClass('error');
			return false;
		}else {
		  $('input:checkbox[name=quiz'+id+'] + label').removeClass('error');
		}
	  } 
        
      //Page Scroll
    $('.ingredients-sec-btn a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });  

    });
    
            /*increase number*/
		$('.add-number').click(function () {
        if ($(this).prev().val() < 99) {
            $(this).prev().val(+$(this).prev().val() + 1);
        }
		});
		$('.sub-number').click(function () {
			if ($(this).next().val() > 1) {
			  if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
			}
		}); 
		

}(jQuery));	



$(document).ready(function(){

	let active = false;
	let position = 0;
	
	var val = $("input[name=success-value]").val();
	
	for (i = 0; i < val ; i++) {
		document.querySelector('.scroller'+i).addEventListener('mousedown',function(){
		  active = true;
		  position = $(this).attr("data-id"); 
		  document.querySelector('.scroller'+position).classList.add('scrolling');
		});
	}
	
	document.body.addEventListener('mouseup',function(){
	  active = false;
	  document.querySelector('.scroller'+position).classList.remove('scrolling');
	});

	document.body.addEventListener('mouseleave',function(){
	  active = false;
	  document.querySelector('.scroller'+position).classList.remove('scrolling');
	});

	document.body.addEventListener('mousemove',function(e){
	  if (!active) return;
	  let x = e.pageX;
	  x -= document.querySelector('.success'+position).getBoundingClientRect().left;
	  scrollIt(x,position);
	});

	function scrollIt(x,position){
		let transform = Math.max(0,(Math.min(x,document.querySelector('.success'+position).offsetWidth)));
		document.querySelector('.after'+position).style.width = transform+"px";
		document.querySelector('.scroller'+position).style.left = transform-25+"px";
	}
	
	scrollIt(150, position); 
      
});    

