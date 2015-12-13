$(document).ready(function() {
	
	/* wow ======================================= */

	new WOW().init({
		offset: 20 
	});

	/* Hero slider ======================================= */

	$('#hero-slides').superslides({
		play: 4000,
		animation: 'fade'
	});

	/* Navbar colapse ======================================= */
	$(document).on('click.nav','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') || $(e.target).is('button')) {
			$(this).collapse('hide');
		}
	});

	/* show about more  ======================================= */
	$("#show-btn").click(function() {
		$('#showme').slideDown("slow");
		$(this).hide();
		return false;
	});

	/* testimonial ======================================= */
	$('.carousel').carousel();
	
	/* One Page Navigation Setup ======================================= */
	$('#main-nav').singlePageNav({
		offset: $('.navbar').height(),
		speed: 750,
		currentClass: 'active',
		filter: ':not(.external)',
		beforeStart: function() {},
		onComplete: function() {}
	});
	
	/* Bootstrap Affix ======================================= */		
	$('#modal-bar').affix({
		offset: {
			top: 10,
		}
	});


	/* style switch	==============================================*/
	$('#style-switcher h2 a').click(function(){
		$('#style-switcher').toggleClass('open');
		return false;
	});

	$('#style-switcher li').click(function(e){
		e.preventDefault();
		var m = $(this);
		$('.colors').attr('href', 'css/' + m.attr('id') + '.css');
		$('#logo').attr('src', 'img/logo-' + m.attr('id') + '.png');
		$('#navlogo').attr('src', 'img/navlogo-' + m.attr('id') + '.png');
		$('#style-switcher').removeClass('open');
		return false; 
	});	


});