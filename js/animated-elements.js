$(document).ready(function() {
	//show or hide the scroll top button
	
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('.animated').fadeIn(200);
		} else {
			$('.animated').fadeOut(200);
		}
	});
	
	//Animate the scroll to top
	$('.animated').click(function(event) {
		event.preventDefault();
		
		$('html,body').animate({scrollTop: 0}, 200);
	});
});