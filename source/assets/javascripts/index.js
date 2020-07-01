import Glide, { Autoplay, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';

import { toogleNav } from './components/sidenav';
import { handleFirstTab } from './components/keyboard_focus';
import './components/tabs';
import './components/form-validation';

// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// sidenav
const sidenavTrigger = document.getElementById('sidenav-trigger');
sidenavTrigger.addEventListener('click', toogleNav);

// mounting Carousel
// new Glide('.glide').mount({ Autoplay });

const glide = document.querySelector('.clients');
if (glide) {
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
}

const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('accordion-active');
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  });
}
