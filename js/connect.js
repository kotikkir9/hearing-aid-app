const icon = document.querySelector('.header__icon');
const button = document.querySelector('#connect-btn');

icon.addEventListener('click', () => {
    location.href = "select-model.html";
});

button.addEventListener('click', () => {
    location.href = 'dashboard.html';
});