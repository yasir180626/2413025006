(function($) {
    'use strict';
	
	jQuery(document).ready(function(){
		
		
		/* START MOBILE-MENU  */
			$('.main_menu').slicknav({
				prependTo:".mobile-nav",
			});
		/* START MOBILE-MENU  */
		
	});	
	
		/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/
		
		// Wow
			new WOW().init();
})(jQuery);