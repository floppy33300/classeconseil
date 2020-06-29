import Glide, { Autoplay, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';

import { toogleNav } from './components/sidenav';
import { handleFirstTab } from './components/keyboard_focus';
import './components/tabs';

// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// sidenav
const sidenavTrigger = document.getElementById('sidenav-trigger');
sidenavTrigger.addEventListener('click', toogleNav);

// mounting Carousel
// new Glide('.glide').mount({ Autoplay });
new Glide('.glide', {
  type: 'carousel',
  autoplay: 4000,
  focusAt: 'center',
  gap: 0,
  animationDuration: 4000,
  animationTimingFunc: 'linear',
  peek: 50,
  perView: 4,
  breakpoints: {
    1100: {
      perView: 3,
    },
    800: {
      perView: 2,
    },
    600: {
      perView: 1,
    },
  },
}).mount({ Autoplay, Breakpoints });
