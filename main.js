// Меню
const navMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Мотивационный раздел
const quoteContainer = document.querySelector('#quote-container');
const newQuoteButton = document.querySelector('#new-quote');

newQuoteButton.addEventListener('click', () => {
    // Получаем случайную цитату
    const quote = getRandomQuote();
    quoteContainer.innerHTML = `<p id="quote-text">${quote}</p>`;
});

function getRandomQuote() {
    // Здесь будет логика для получения случайной цитаты
    return 'Нужна мотивация? Сиди в жопе.';
}