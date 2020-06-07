// Dropdown menu
var triggerMenu = document.getElementById('menu-icon');
var menu = document.querySelector('nav');

triggerMenu.addEventListener('click', function(){
    if(menu.style.display === '' || menu.style.display === 'none'){
        menu.style.display = 'inline-block';
    }else {
        menu.style.display = 'none';
    }
}), false;












