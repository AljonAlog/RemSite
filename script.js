$(document).ready(function() {
            // Mobile Navigation Toggle
            $('.hamburger').click(function() {
                $('.nav-links').toggleClass('nav-active');
            });
            
            // Smooth Scrolling for Anchor Links
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                
                var targetId = $(this).attr('href');
                var $targetElement = $(targetId);
                
                if ($targetElement.length) {
                    $('html, body').animate({
                        scrollTop: $targetElement.offset().top - 80
                    }, 800);
                    
                    // Close mobile menu if open
                    if ($('.nav-links').hasClass('nav-active')) {
                        $('.nav-links').removeClass('nav-active');
                    }

                    // For attorney profile sections, show the appropriate section
                    if (targetId === '#team') {
                        $('.attorney-profile').fadeOut(300);
                    }
                }
            });
            
            // Sticky Header on Scroll
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('header').addClass('scrolled');
                } else {
                    $('header').removeClass('scrolled');
                }
            });

            // Team Member Profile Click
           $('#ruma-profile-link .team-member-image').click(function() {
				$('#attorney-ruma').fadeIn(500, function() {
					$('html, body').animate({
						scrollTop: $('#attorney-ruma').offset().top - 80
					}, 800);
				});
			});
			
			$('#escalante-profile-link .team-member-image').click(function() {
				$('#attorney-escalante').fadeIn(500, function() {
					$('html, body').animate({
						scrollTop: $('#attorney-escalante').offset().top - 80
					}, 800);
				});
			});
			
			$('#labugen-profile-link .team-member-image').click(function() {
				$('#attorney-labugen').fadeIn(500, function() {
					$('html, body').animate({
						scrollTop: $('#attorney-labugen').offset().top - 80
					}, 800);
				});
			});


            // Back to Team Click
            $('.back-to-team').click(function(e) {
                e.preventDefault();
                
                $('html, body').animate({
                    scrollTop: $('#team').offset().top - 80
                }, 800);
                
                // Hide all attorney profiles
                $('.attorney-profile').fadeOut(300);
            });
        });