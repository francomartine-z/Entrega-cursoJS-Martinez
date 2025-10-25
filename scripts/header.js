//Se encarga de interactividad del header

const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const menuList = document.getElementById('menuList');

menuBtn.addEventListener('click', () => {
    menuList.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menuList.classList.remove('active');
});