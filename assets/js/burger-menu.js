const menu = document.querySelector('.header__menu');
const btn = document.querySelector('.burger-menu');

btn.addEventListener('click', () => {
    const isActive = menu.classList.toggle('_active');
    btn.classList.toggle('_active');
    if (isActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
})