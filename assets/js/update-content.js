const cardTitleTwo = document.querySelector('.rules__title--two');
const cardTitleThree = document.querySelector('.rules__title--three');
const cardTextTwo = document.querySelector('.rules__text--two');
const cardTextThree = document.querySelector('.rules__text--three');
const cardPrizeOne = document.querySelector('.prize-1');
const cardPrizeTwo = document.querySelector('.prize-2');
const tabletBreakpoint = 768;
const mobileBreakpoint = 425;

const titles = {
    titleTwo: cardTitleTwo.textContent,
    titleThree: cardTitleThree.textContent
};

const texts = {
    textTwo: cardTextTwo.textContent,
    textThree: cardTextThree.textContent
};

function updateContent() {
    if(window.innerWidth <= mobileBreakpoint) {
        cardTitleTwo.textContent = 'Покажите упаковку';
        cardTitleThree.textContent = 'напишите название';
        cardTextTwo.textContent = 'Покажите на фото упаковку джема «Махеевъ».';
        cardTextThree.textContent = 'Напишите в названии рецепта «Кусочки лета» и «Махеевъ».';
    } else {
        cardTitleTwo.textContent = titles.titleTwo;
        cardTitleThree.textContent = titles.titleThree;
        cardTextTwo.textContent = texts.textTwo;
        cardTextThree.textContent = texts.textThree;
    }
};

function swapCards() {
    if(window.innerWidth <= tabletBreakpoint) {
        cardPrizeTwo.before(cardPrizeOne);
    } else {
        cardPrizeOne.before(cardPrizeTwo);
    }
}

updateContent();
swapCards()
window.addEventListener('resize', updateContent);
window.addEventListener('resize', swapCards);
