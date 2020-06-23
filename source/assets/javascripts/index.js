import { toogleNav } from './components/sidenav';
import { handleFirstTab } from './components/keyboard_focus';

// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// sidenav
const sidenavTrigger = document.getElementById('sidenav-trigger');
sidenavTrigger.addEventListener('click', toogleNav);

const current = document.location.pathname.split('/')[1];
const navs = document.querySelectorAll('.navbar-link');

console.log(current);
console.log(navs);

Array.from(navs).forEach(el => {
  const truncatedHref = el.href.split('/')[3];
  console.log(truncatedHref);
  if (truncatedHref === current) {
    el.classList.add('active');
  }
});
