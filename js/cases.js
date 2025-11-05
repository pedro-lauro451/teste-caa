document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carouselCases = document.querySelector('.carousel-cases');
    const cards = document.querySelectorAll('.card-carousel');
    const numCards = cards.length;

    let cardWidth;

    if (window.innerWidth < 768) {
        cardWidth = 280;
    } else {
        cardWidth = 380;
    }

    const cardMargin = 24;
    let currentIndex = 0;

    const firstCardsClone = Array.from(cards).map(card => card.cloneNode(true));
    const lastCardsClone = Array.from(cards).map(card => card.cloneNode(true));

    firstCardsClone.forEach(card => carouselCases.appendChild(card));
    lastCardsClone.forEach(card => carouselCases.insertBefore(card, cards[0]));

    function showCurrentCard() {
        carouselCases.style.transition = 'transform 0.5s ease-in-out';
        carouselCases.style.transform = `translateX(-${(cardWidth + cardMargin) * (currentIndex + 1)}px)`;
    }

    function handleTransitionEnd() {
        if (currentIndex >= numCards) {
            carouselCases.style.transition = 'none';
            currentIndex = 0;
            carouselCases.style.transform = `translateX(-${(cardWidth + cardMargin)}px)`;
        } else if (currentIndex < 0) {
            carouselCases.style.transition = 'none';
            currentIndex = numCards - 1;
            carouselCases.style.transform = `translateX(-${(cardWidth + cardMargin) * numCards}px)`;
        }
    }

    prevButton.addEventListener('click', () => {
        currentIndex--;
        showCurrentCard();
    });

    nextButton.addEventListener('click', () => {
        currentIndex++;
        showCurrentCard();
    });

    carouselCases.addEventListener('transitionend', handleTransitionEnd);

    showCurrentCard();


    // hide same card as page url
    const currentPagePath = window.location.pathname;
    const cardsHref = document.querySelectorAll(".card-carousel");

    cardsHref.forEach(card => {
        const cardUrl = card.querySelector("a").getAttribute("href");
        const cardPath = new URL(cardUrl, window.location.origin).pathname;
        if (cardPath === currentPagePath) {
            card.style.display = "none";
        }
    });
});