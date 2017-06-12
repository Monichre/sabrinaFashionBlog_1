/* ===================================================================
 * Abstract - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

	"use strict";

	var cfg = {
		defAnimation   : "fadeInUp",    // default css animation
		scrollDuration : 800,           // smoothscroll duration
		statsDuration  : 4000,          // stats animation duration
		mailChimpURL   : 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'
	},

	$WIN = $(window);




	/* audio controls
	 * -------------------------------------------------- */
	var ssMediaElementPlayer = function() {
		$("audio").mediaelementplayer({
			features: ['playpause','progress', 'tracks','volume']
	  	});
	};


	/* FitVids
	------------------------------------------------------ */
	var ssFitVids = function() {
		$(".fluid-video-wrapper").fitVids();
	};


	/* pretty print
	 * -------------------------------------------------- */
	var ssPrettyPrint = function() {
		$('pre').addClass('prettyprint');
		$( document ).ready(function() {
	    	prettyPrint();
	  	});
	};


	/* Alert Boxes
  	------------------------------------------------------- */
  	var ssAlertBoxes = function() {

  		$('.alert-box').on('click', '.close', function() {
		  $(this).parent().fadeOut(500);
		});

  	};


	/* superfish
	 * -------------------------------------------------- */
	var ssSuperFish = function() {
		$('ul.sf-menu').superfish({

	   	animation: { height:'show' }, // slide-down effect without fade-in
			animationOut: { height:'hide'}, // slide-up effect without fade-in
			cssArrows: false, // disable css arrows
			delay: 600 // .6 second delay on mouseout

		});
	};


  	/* Mobile Menu
   ------------------------------------------------------ */
   var ssMobileNav = function() {

   	var toggleButton = $('.menu-toggle'),
          nav = $('.main-navigation');

	   toggleButton.on('click', function(event){
			event.preventDefault();

			toggleButton.toggleClass('is-clicked');
			nav.slideToggle();
		});

	  	if (toggleButton.is(':visible')) nav.addClass('mobile');

	  	$WIN.resize(function() {
	   	if (toggleButton.is(':visible')) nav.addClass('mobile');
	    	else nav.removeClass('mobile');
	  	});

	  	$('#main-nav-wrap li a').on("click", function() {
	   	if (nav.hasClass('mobile')) {
	   		toggleButton.toggleClass('is-clicked');
	   		nav.fadeOut();
	   	}
	  	});

   };


  /* search
   ------------------------------------------------------ */
   var ssSearch = function() {

   	var searchWrap = $('.search-wrap');
	   var searchField = searchWrap.find('.search-field');
	   var closeSearch = $('#close-search');
	   var searchTrigger = $('.search-trigger');
	   var body = $('body');

	   searchTrigger.on('click', function(e){

	      e.preventDefault();
	      e.stopPropagation();
	      var $this = $(this);

	      body.addClass('search-visible');
	      setTimeout(function(){
	         $('.search-wrap').find('.search-field').focus();
	      }, 100);

	   });


	   closeSearch.on('click', function(){
	      var $this = $(this);

	      if(body.hasClass('search-visible')){
	         body.removeClass('search-visible');
	         setTimeout(function(){
	            $('.search-wrap').find('.search-field').blur();
	         }, 100);
	      }
	   });

	   searchWrap.on('click',  function(e){
	   	if( !$(e.target).is('.search-field') ) {
	   		closeSearch.trigger('click');
	   	}
	   });

	   searchField.on('click', function(e){
	      e.stopPropagation();
	   });

	   searchField.attr({placeholder: 'Type Your Keywords', autocomplete: 'off'});

   };



	/*	Masonry
	------------------------------------------------------ */
	var ssMasonryFolio = function() {
		var containerBricks = $('#health-gallery .row');

		containerBricks.imagesLoaded( function() {

			containerBricks.masonry( {
			  	itemSelector: '.health-blog-post-preview',
				columnWidth: '.col-sm-3'

			});

		});
	};

	// # to expedite the license: 5184869786


  /* animate bricks
	* ------------------------------------------------------ */
	// var ssBricksAnimate = function() {
	//
	// 	var animateEl = $('.animate-this');
	//
	// 	$WIN.on('load', function() {
	// 		setTimeout(function() {
	// 			animateEl.each(function(ctr) {
	// 					var el = $(this);
	//
	// 					setTimeout(function() {
	// 						el.addClass('animated fadeInUp');
	// 					}, ctr * 200);
	//
	// 			});
	// 		}, 200);
	// 	});
	//
	// 	$WIN.on('resize', function() {
	// 		// remove animation classes
	// 		animateEl.removeClass('animate-this animated fadeInUp');
	// 	});
	//
	// };



  /* Smooth Scrolling
	* ------------------------------------------------------ */
	var ssSmoothScroll = function() {

		$('.smoothscroll').on('click', function (e) {
			var target = this.hash,
			$target    = $(target);

		 	e.preventDefault();
		 	e.stopPropagation();

	    	$('html, body').stop().animate({
	       	'scrollTop': $target.offset().top
	      }, cfg.scrollDuration, 'swing').promise().done(function () {

	      	// check if menu is open
	      	if ($('body').hasClass('menu-is-open')) {
					$('#header-menu-trigger').trigger('click');
				}

	      	window.location.hash = target;
	      });
	  	});

	};


  /* Placeholder Plugin Settings
	* ------------------------------------------------------ */
	var ssPlaceholder = function() {
		$('input, textarea, select').placeholder();
	};


  /* AjaxChimp
	* ------------------------------------------------------ */
	var ssAjaxChimp = function() {

		$('#mc-form').ajaxChimp({
			language: 'es',
		   url: cfg.mailChimpURL
		});

		// Mailchimp translation
		//
		//  Defaults:
		//	 'submit': 'Submitting...',
		//  0: 'We have sent you a confirmation email',
		//  1: 'Please enter a value',
		//  2: 'An email address must contain a single @',
		//  3: 'The domain portion of the email address is invalid (the portion after the @: )',
		//  4: 'The username portion of the email address is invalid (the portion before the @: )',
		//  5: 'This email address looks fake or invalid. Please enter a real email address'

		$.ajaxChimp.translations.es = {
		  'submit': 'Submitting...',
		  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
		  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
		  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
		  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
		}

	};



  /* Initialize
	* ------------------------------------------------------ */
	(function ssInit() {


		ssMediaElementPlayer();
		ssFitVids();
		ssPrettyPrint();
		ssAlertBoxes();
		ssSuperFish();
		ssMobileNav();
		ssSearch();
		ssMasonryFolio();
		// ssBricksAnimate();

		ssSmoothScroll();
		ssPlaceholder();
		ssAjaxChimp();

	})();



})(jQuery);
