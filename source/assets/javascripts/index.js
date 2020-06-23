import { toogleNav } from './components/sidenav';
import { handleFirstTab } from './components/keyboard_focus';

// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// sidenav
const sidenavTrigger = document.getElementById('sidenav-trigger');
sidenavTrigger.addEventListener('click', toogleNav);
