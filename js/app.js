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

let isExpanded = false; // Флаг для отслеживания состояния кнопки
let displayedCards = []; // Массив для хранения показанных карточек

document.getElementById("loadMore").addEventListener("click", () => {
  const hiddenCards = document.querySelectorAll('.card.hidden');

  if (!isExpanded) {
    for (let i = 0; i < 2 && i < hiddenCards.length; i++) {
      hiddenCards[i].classList.remove('hidden');
      displayedCards.push(hiddenCards[i]);
    }
        
    this.innerText = 'Показать меньше';
    isExpanded = true;
  } else {
    for (let card of displayedCards) {
      card.classList.add('hidden');
    }
        
    displayedCards = [];
    this.innerText = 'Показать все';
    isExpanded = false;
  }
});