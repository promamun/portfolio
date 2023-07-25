(function($) {
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var sticky_header = $('.main-header .sticky-header, .header-style-two .outer-container, .header-style-four .header-lower, .header-style-six .outer-container');
			var scrollLink = $('.scroll-to-top');
			if (windowpos > 55) {
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
		$('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
		
		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});

		//Megamenu Toggle
		$('.main-header .main-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('.mega-menu').slideToggle(500);
		});
		
		//Disable dropdown parent link
		$('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
			e.preventDefault();
		});
	}

	//Searchbox Modal
	$('.search-box-btn').on('click', function(){
	  var buttonId = $(this).attr('id');
	  $('#modal-container').removeAttr('class').addClass(buttonId);
	  $('body').addClass('modal-active');
	})

	$('.close').on('click', function(){
	  $('#modal-container').addClass('out');
	  $('body').removeClass('modal-active');
	});

	//Social Media Blog
	$('.share-button').on('click', function(){
	    $('.news-block.style-three .overlay-box .social-links').toggleClass('show-social');
	});

	//Sidenav Two Toggle
	if($('.sidenav-bar, .hidden-bar').length){
		
		//Dropdown Button
		$('.sidenav-bar .navigation li.dropdown > a').on('click', function(e) {
			e.preventDefault();
			var ParentBox = $(this).parent('li');
			if($(ParentBox).hasClass('active')===true){
				$(ParentBox).removeClass('active');
			}else{
				$('.sidenav-bar .navigation li.dropdown').removeClass('active');
				$(this).parent('li').addClass('active');
			}
		});
	
		$(".sidenav-bar .side-nav .navigation li.dropdown > ul").slideUp();

		//Dropdown Button
		$('.sidenav-bar .side-nav .navigation li.dropdown > a').on('click', function() {
			$(this).next('ul').slideToggle(400);
			$(this).parent().siblings().find("ul").slideUp(400);
		});

		//Show Sidebar Button
		$('.main-header .nav-toggler').on('click', function(e) {
			e.preventDefault();
			$('body').toggleClass('active-side-nav');
		});
		
		//Dropdown Button
		$('.sidenav-bar .cross-icon, .hidden-bar .cross-icon, .form-back-drop').on('click', function(e) {
			e.preventDefault();
			$('body').removeClass('active-side-nav');
		});
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
		
		//Dropdown Button
		$('.pricing-tabs .tab-buttons .yearly').on('click', function() {
			$('.round').addClass('boll-right');
		});
		
		//Dropdown Button
		$('.pricing-tabs .tab-buttons .monthly').on('click', function() {
			$('.round').removeClass('boll-right');
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
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 0,
			max: 90,
			values: [ 8, 85 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});

		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );
	}
	function full_Screen(){
		$('.full-screen').css("height", $(window).height());
	}
	full_Screen()

	//Hidden Sidebar
	if ($('.sidenav-bar').length) {
		$('.sidenav-bar').mCustomScrollbar({
		    theme:"dark"
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
/* ==========================================================================
	When document is resize, do
   ========================================================================== */
   $(window).on('resize', function() {
		full_Screen();
	});


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
	$(window).on('scroll', function() {
		headerStyle();
		full_Screen()
	});
})(window.jQuery);