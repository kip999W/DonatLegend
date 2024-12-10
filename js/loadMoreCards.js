let isExpanded = false;
let lastShownCount = 0;

document.getElementById("loadMore").addEventListener("click", (event) => {
  const hiddenCards = document.querySelectorAll('.card.hidden');
  const visibleCards = document.querySelectorAll('.card:not(.hidden)');

  if (!isExpanded) {
    const cardsToShow = Math.min(2, hiddenCards.length);

    for (let i = 0; i < cardsToShow; i++) {
      hiddenCards[i].classList.remove('hidden');
    }

    lastShownCount += cardsToShow;
    event.target.innerText = 'Показать меньше';
    isExpanded = true;
  } else {
    const cardsToHide = lastShownCount > 0 ? (lastShownCount < 2 ? lastShownCount : 2) : 0;

    for (let i = 0; i < cardsToHide; i++) {
      visibleCards[visibleCards.length - 1 - i].classList.add('hidden');
    }

    lastShownCount -= cardsToHide;
    event.target.innerText = 'Просмотреть все';
    isExpanded = false;
  }
});