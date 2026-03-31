const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    const expanded =
      menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute(
      'aria-expanded',
      String(!expanded)
    );
  });

  // closes menu after clicking a link (good UX on mobile)

  document.querySelectorAll('.nav-links a')
    .forEach(link => {

      link.addEventListener('click', () => {

        navLinks.classList.remove('show');

        menuToggle.setAttribute(
          'aria-expanded',
          'false'
        );

      });

    });

}