const elSiteHeaderToggler = document.querySelector('.js-site-header-toggler');
const elSiteHeaderSitenav = document.querySelector('.site-header__sitenav');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function() {
    elSiteHeaderSitenav.classList.toggle('site-header__sitenav--open');
  })
}