document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  btn.addEventListener('click', () => {
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    // flip state
    btn.setAttribute('aria-expanded', String(!isOpen));
    nav.hidden = isOpen;
  });
});
