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

const games = [
  {
    imgSrc: "./image/games/mobile/mobileLegends/uims7flr7aguvft1715239027.webp",
    title: "Mobile Lengends: Bang Bang",
    link: "#",
  },
  {
    imgSrc: "./image/games/mobile/landOfEmpires/cu44z15kegxzo001731392087.webp",
    title: "Land of Empires",
    link: "#",
  },
  {
    imgSrc: "./image/games/mobile/watcherOfRealms/64qc3nz4mes71bj1715239930.webp",
    title: "Watcher of Realms",
    link: "#",
  },
  {
    imgSrc: "./image/games/mobile/loveNikki/aq201b1b2fnbtt61729758151.webp",
    title: "Love Nikki",
    link: "#",
  },
  {
    imgSrc: "./image/games/mobile/sweetDance/67w13bjn2ugeze31715239625.webp",
    title: "Sweet Dance",
    link: "#",
  },
  {
    imgSrc: "./image/games/mobile/honorOfKings/shpkzzdj8ozakw11715238705.webp",
    title: "Honor of Kings",
    link: "#",
  },
  {
    imgSrc: "./image/games/mobile/arenaBreakoutCode/h7nau1m2zip1a3e1729751095.webp",
    title: "Arena Breakout Code",
    link: "#",
  },
  {
    imgSrc: "./image/games/mobile/STREET_FIGHTER_DUEL/k5fzjesvjyn3ei61715239625.webp",
    title: "Street Fighter: Duel",
    link: "#",
  },
  {
    imgSrc: "./image/games/mobile/honkaiStarRail/cqdg6tomzxs0x6z1729757248.webp",
    title: "Honkai: Star Rail",
    link: "#",
  },
  {
    imgSrc: "./image/games/mobile/genshinImpact/vapazmkhubjmirn1715238327.webp",
    title: "Genshin Impact",
    link: "#",
  },
];

const renderCards = (games) => {
  const container = document.getElementById('cards-container');
  games.forEach(game => {
    const card = document.createElement('div');
    card.classList.add('card-list');

    card.innerHTML = `
      <a href="${game.link}" class="card-list__link">
        <div class="card__img-container">
          <img src="${game.imgSrc}" class="card__img">
          <h3 class="card__title">${game.title}</h3>
        </div>
      </a>
    `;

    container.appendChild(card);
  }); 
};

renderCards(games);