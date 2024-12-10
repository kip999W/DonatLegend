const swiperText = new Swiper('.swiper', {
	speed: 1600,
	loop: true,
	allowTouchMove: false,

	autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},

	navigation: {
		prevEl: '.swiper-button-prev',
		nextEl: '.swiper-button-next'
	}
});