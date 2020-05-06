$(document).ready(function(){
	$('.menu_hamburger').on('click', function(){
		$(this).toggleClass('active');
		$('.menu_logo_list').toggleClass('active');
	});
});