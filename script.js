const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navRight = document.querySelector('.nav-right');

if (menuToggle && navLinks && navRight) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    navRight.classList.toggle('show');

    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
      navRight.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}