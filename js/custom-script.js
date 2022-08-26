(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('body').addClass('page-loaded');
			$('.preloader').delay(1000).fadeOut(0);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 52) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}
	
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');
		
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('#search-popup').removeClass('mobile-menu-visible');
	            $('body').removeClass('mobile-menu-visible');
	        }
	    });
	}

	//Search Popup
	if($('#search-popup').length){
		
		//Show Popup
		$('.search-toggler').on('click', function() {
			$('#search-popup').addClass('popup-visible');
			$('body').addClass('search-visible');
		});
		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	            $('#search-popup').removeClass('popup-visible');
	            $('body').removeClass('search-visible');
	        }
	    });
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function() {
			$('#search-popup').removeClass('popup-visible');
			$('body').removeClass('search-visible');
		});
	}

	//Hidden Bar Menu Config
	function hiddenBarMenuConfig() {
		var menuWrap = $('.hidden-bar .side-menu');
		// hidding submenu 
		menuWrap.find('.dropdown').children('ul').hide();
		// toggling child ul
		menuWrap.find('li.dropdown > a').each(function () {
			$(this).on('click', function (e) {
				e.preventDefault();
				$(this).parent('li.dropdown').children('ul').slideToggle();
	
				// adding class to item container
				$(this).parent().toggleClass('open');
	
				return false;
	
			});
		});
	}
	
	hiddenBarMenuConfig();
	
	
	//Hidden Sidebar
	if ($('.hidden-bar').length) {
		var hiddenBar = $('.hidden-bar');
		var hiddenBarOpener = $('.max-nav-toggler .toggle-btn');
		var hiddenBarCloser = $('.hidden-bar-closer');
		$('.hidden-bar-wrapper').mCustomScrollbar();
		
		//Show Sidebar
		hiddenBarOpener.on('click', function () {
			hiddenBar.addClass('visible-sidebar');
		});
		
		//Hide Sidebar
		hiddenBarCloser.on('click', function () {
			hiddenBar.removeClass('visible-sidebar');
		});

		$(document).keydown(function(e){
	        if(e.keyCode === 27) {
	        	hiddenBar.removeClass('visible-sidebar');
	        }
	    });
		
	}
	
	//Main Slider / Banner Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			loop:true,
			animateOut: 'fadeOut',
            animateIn: 'fadeIn',
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 8000,
			autoplayTimeout:8000,
			navText: [ '<span class="icon flaticon-arrows-1"></span>', '<span class="icon flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//Main Slider / Banner Carousel
	if ($('.banner-carousel-two').length) {
		$('.banner-carousel-two').owlCarousel({
			loop:true,
			animateOut: 'fadeOut',
            animateIn: 'fadeIn',
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 7000,
			autoplayTimeout:7000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//Events Carousel
	if ($('.events-carousel').length) {
		$('.events-carousel').slick({
		  nav: true,
		  infinite: false,
		  speed: 500,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  dots: false,
		  vertical:true,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});
	}

	//Team Carousel
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			loop:false,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:3
				},
				1024:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});
	}

	//News Carousel
	if ($('.news-carousel').length) {
		$('.news-carousel').owlCarousel({
			loop:false,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
	}

	//Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//Departments Carousel
	if ($('.departments-carousel').length) {
		$('.departments-carousel').owlCarousel({
			loop:false,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
	}

	//Highlights Carousel
	if ($('.hi-carousel').length) {
		$('.hi-carousel').on('initialized.owl-carousel translate.owl-carousel', function(e){
	        idx = e.item.index;
	        $('.owl-item.inview').removeClass('inview');
	        $('.owl-item.previous').removeClass('previous');
	        $('.owl-item').eq(idx).addClass('inview');
	        $('.owl-item').eq(idx-1).addClass('previous');
	    });
	    $('.hi-carousel').owlCarousel({
	        center: true,
	        loop:true,
	        margin:50,
	        autoplay: true,
	        autoPlay: 5000,
	        dots:false,
	        nav:true,
			navText: [ '<span class="icon flaticon-left-1"></span>', '<span class="icon flaticon-right-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},
				1024:{
					items:1
				}
			}
	    })
	}

	//Reviews Carousel
	if ($('.reviews-carousel').length) {
		$('.reviews-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
	}

	//Twitter Feeds Carousel
	if ($('.feeds-carousel').length) {
		$('.feeds-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			dots:false,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-arrows-1"></span>', '<span class="icon flaticon-right-arrow"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//Event Carousel
	if ($('.featured-carousel').length) {
		$('.featured-carousel').owlCarousel({
			loop:true,
			center:true,
			margin:2,
			nav:true,
			dots:false,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1,
					center:false
				},
				600:{
					items:1,
					center:false
				},
				768:{
					items:2,
					center:false
				},
				1024:{
					items:2,
					center:false
				},
				1200:{
					items:3
				}
			}
		});
	}

	//Guests Carousel
	if ($('.guest-carousel').length) {
		$('.guest-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:2
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});
	}

	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}



	//Testimonials Carousel Three
	if ($('.testimonial-carousel-three').length) {
		$('.testimonial-carousel-three').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//Event Carousel
	if ($('.event-carousel').length) {
		$('.event-carousel').owlCarousel({
			loop:true,
			margin:60,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-back"></span>', '<span class="icon flaticon-next"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//Coming Soon Scroll
	if($('.yacht-details .scroller').length){  
		$('.yacht-details .scroller').mCustomScrollbar();
	}

	//Coming Soon Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hrs</div>  ' + '<div class="counter-column"><span class="count">%M</span>Mins</div>  ' + '<div class="counter-column"><span class="count">%S</span>Secs</div>'));
		});
	 });
	}

	//Datepicker
	if($('.datepicker').length) {
		$(".datepicker").datepicker();
	}

	//Custom Quantity Spinner
	if($('.quantity-spinner').length){
		$('.quantity-spinner .plus').on('click', function() {
			var val = $(this).prev('.prod_qty').val();
			$(this).prev('.prod_qty').val((val*1)+1);
		});

		$('.quantity-spinner .minus').on('click', function(){
			var val = $(this).next('.prod_qty').val();
			if (val != 1 ){
			$(this).next('.prod_qty').val((val*1)-1);
			}
		});
	}

	//Date Time Picker
	if($('.datetime-picker').length){
		$('.datetime-picker').datetimepicker({
			formatDate:'Y/m/d',
			minDate:'-2020/01/01', // yesterday is minimum date
			maxDate:'+2030/12/30' // and tommorow is maximum date calendar
		});
	}

	//Range Slider
	if($('.range-slider-1').length){
		$(".range-slider-1" ).slider({
		      range: true,
		      min: 0,
		      max: 7500,
		      values: [ 1000, 2500 ],
		      slide: function( event, ui ) {
		        $( "#amount-1" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
		      }
		    });
		    $( "#amount-1" ).val( "$" + $( ".range-slider-1" ).slider( "values", 0 ) +
		      " - $" + $( ".range-slider-1" ).slider( "values", 1 ));
	  }

	//Sortable Masonary with Filters
	function sortableMasonry() {
		if($('.sortable-masonry').length){
	
			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');
	
			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.masonry-item.col-lg-4'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
			
	
			// Isotope Filter 
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');
	
				try {
					$container.isotope({ 
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {
	
				}
				return false;
			});
	
	
			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});
	
	
			var filterItemA	= $('.filter-btns li');
	
			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	sortableMasonry();


	//MixitUp Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }

	 //3 Column Load More Mixitup Gallery With Filters
	if($('.loadmore-gallery-one .filter-gallery-one').length){
		
		$(".loadmore-gallery-one .filter-gallery-one").mixItUp({
			selectors: {
			  target: ".mix" // As in mixitup
			},
			layout: {
			  display: "inline-block" // As in mixitup
			},
			loadmore: {
			  // The number of items to start with
			  initial: 9,
			  // The number of items to load on click on the loadmore button
			  loadMore: 3,
			  // A selector string for the existing wrapper the buttons will be inserted into
			  buttonWrapper: ".loadmore",
			  // The class of the Load more button
			  buttonClass: "loadmore-button",
			  // The label of the Load more button
			  buttonLabel: "Load More",
			  // The class of the less button
			  lessClass: "loadmore-less",
			  // The label of the less button
			  lessLabel: "Show Less"
			}
		  });
	}
	
	
	//Default Load More Elements / Blog
	if($('.load-more-section').length){
		var SliceCount = $('.load-more-section').attr('data-load-number');
		$(".load-more-section .load-more-btn").on('click', function (e) {
			e.preventDefault();
			//alert(sliceCount);
			$(".load-more-section .load-more-item:hidden").slice(0, SliceCount).fadeIn(500);
			if ($(".load-more-section .load-more-item:hidden").length < SliceCount) {
				$(".load-more-section .load-more-item:hidden").fadeIn(500);
				$(".load-more-section .load-more-btn").fadeOut(0);
			}
		});
	}
	
	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));
			
			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if ($(this).next('.acc-content').is(':visible')){
				//return false;
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(300);
				$(outerBox).children('.accordion').removeClass('active-block');
			}else{
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	
	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}
	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);
	
		});
	}
	
	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
	});

/* ==========================================================================
   When document is Resized, do
   ========================================================================== */
	
	$(window).on('resize', function() {
		
	});	

/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
		sortableMasonry();
	});	

})(window.jQuery);