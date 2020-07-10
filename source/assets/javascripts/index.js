import Glide, { Autoplay, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm';
import smoothscroll from 'smoothscroll-polyfill';

import { toogleNav } from './components/sidenav';
import { handleFirstTab } from './components/keyboard_focus';
import './components/tabs';
import './components/form-validation';
import { checkScrollToTop } from './components/back_to_top';

// outline for keyboard user on focus
window.addEventListener('keydown', handleFirstTab);

// back top top btn
smoothscroll.polyfill();
window.addEventListener('scroll', () => {
  checkScrollToTop();
});

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

// accordion
const acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i += 1) {
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

// script to detect if using IE and display an alert
function getIEVersion() {
  const sAgent = window.navigator.userAgent;
  const idx = sAgent.indexOf('MSIE');
  // If IE, return version number.
  if (idx > 0) {
    return parseInt(sAgent.substring(idx + 5, sAgent.indexOf('.', idx)));
    // If IE 11 then look for Updated user agent string.
  }
  if (navigator.userAgent.match(/Trident\/7\./)) {
    return 11;
  }
  // It is not IE
  return 0;
}

if (getIEVersion() > 0) {
  alert(
    `Vous utilisez Internet Explorer ${getIEVersion()}.\nThe site internet ne fonctionne pas sur ce navigateur obsolète.\n Nous supportons les versions récentes des principaux navigateurs comme, Chrome, Firefox, Safari, Edge et Opera.\nPour une meilleure expérience de navigation nous recommandons une mise à jour de votre navigateur.`
  );
}
