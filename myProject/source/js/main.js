

$(document).ready(function () {

	/* Portfolio */
	$('.button[filter]').click(function () {
		if ($(this).attr('val') == 'off') {
			$('.button[filter]').attr('val', 'off').removeClass('focused');
			$(this).attr('val', 'on').addClass('focused');
			$('.filter > div').hide(300);
			$('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
			if ($(this).attr('filter') == 'all') {
				$('.button[filter]').attr('val', 'off').removeClass('focused');
				$(this).attr('val', 'on').addClass('focused');
				$('.filter > div').show(300);
			}
		}
	});

	/* Slider */
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		dots: true,
		dotsClass: 'dots-style',
		responsive: [{
			breakpoint: 1025,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Menu */
	$('ul.menu a[href^="#"').click(function () {
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
		return false;
	});

	/* Drop-down menu */
	$('.menu-icon').click(function () {
		$('nav').slideToggle(500);
		$('ul.menu').css({
			'display': 'flex',
			'flex-direction': 'column'
		});
		if ($('.menu-icon').html() == '<i class="fas fa-bars"></i>') {
			$(this).html('<i class="fas fa-times"></i>');
		} else {
			$(this).html('<i class="fas fa-bars"></i>');
		}
	});

	/* up-btn */
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0)
			$('#toTop').fadeIn();
		else
			$('#toTop').fadeOut();
	});
	$('#toTop').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
	});
})



