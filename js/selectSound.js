const buttons = document.querySelectorAll('.header__btn');
const returnButton = document.querySelector('.header__icon');

returnButton.addEventListener('click', () => {
    location.href = 'dashboard.html';
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.header__btn--active').classList.remove('header__btn--active');
        btn.classList.toggle('header__btn--active');
    });
});