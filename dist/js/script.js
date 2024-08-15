
let hamburger = document.querySelector('.sidepanel__wrapper_burger');
let menu = document.querySelector('.menu');


const toggleMenu = () => {
  menu.classList.toggle('active');
}

hamburger.addEventListener('click', e => {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener('click', e => {
    
  let its_menu = e.target == menu || menu.contains(e.target);
  let its_hamburger = e.target == hamburger;
  let menu_is_active = menu.classList.contains('active');
  
  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
}) 