const current = document.location.pathname.split('/')[1];
const navs = document.querySelectorAll('.navbar-link');

Array.from(navs).forEach(el => {
  const truncatedHref = el.href.split('/')[3];
  const navLinkWrapper = el.parentElement;
  if (truncatedHref === current) {
    navLinkWrapper.classList.add('active');
  }
});
