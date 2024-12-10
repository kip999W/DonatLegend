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

const filterCards = () => {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card-list');
  let found = false;

  cards.forEach(card => {
    const title = card.querySelector('.card__title').textContent.toLowerCase();
    if (title.includes(searchInput)) {
      card.style.display = '';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  const noResults = document.getElementById('no-results');
  noResults.style.display = found ? 'none' : 'block';
};

document.getElementById('searchButton').addEventListener('click', filterCards);
document.getElementById('searchInput').addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    filterCards();
  }
});

renderCards(games);