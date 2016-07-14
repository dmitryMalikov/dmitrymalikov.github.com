function burgerMenu() {
	$('.toggle-menu').on('click',function(){
		$(this).parents('.nav-section').toggleClass( "open" );
	})
}

$(window).on('load', function(){
	$('.preloader').fadeOut();
	burgerMenu();
});
