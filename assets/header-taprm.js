let butOpen = document.querySelector('.burger-icon');
butOpen.addEventListener('click', function (){
    document.querySelector('.header__menus').classList.toggle('show-menu');
    document.querySelector('.line-burger').classList.toggle('icon-close');
    document.querySelector('.header__menus').classList.contains('show-menu')?document.querySelector('body').style.overflow = 'hidden':document.querySelector('body').style.overflow = 'auto';
});