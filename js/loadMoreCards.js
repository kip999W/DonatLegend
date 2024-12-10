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