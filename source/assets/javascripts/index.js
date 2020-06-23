import { toogleNav } from './components/sidenav';
import { handleFirstTab } from './components/keyboard_focus';
import './components/tabs';

// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// sidenav
const sidenavTrigger = document.getElementById('sidenav-trigger');
sidenavTrigger.addEventListener('click', toogleNav);
