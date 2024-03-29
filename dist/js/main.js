//Select DOM items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const footerYear = document.querySelector('.year')
const experience = document.querySelector('.experience');

//Inital State of menu
let showMenu = false;
let initialExperience = 1;

menuBtn.addEventListener('click', toggleMenu);

if (footerYear != null)
{
  footerYear.innerHTML = new Date().getFullYear();
}

if (experience !=null)
{
  experience.innerHTML = new Date().getFullYear() - 2019;
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    //set Menu State
    showMenu = false;
  }
}
