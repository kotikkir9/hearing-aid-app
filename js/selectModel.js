const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        location.href = "connect.html";
    });
});
