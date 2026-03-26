document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger?.addEventListener('click', () => {
    console.log('Hamburger clicked');
    menu?.classList.toggle('show');
  });

  document.querySelectorAll('.menu-item').forEach((item) => {
  const link = item.querySelector('a');
  const submenu = item.querySelector('.submenu');

  if (submenu) {
    // Prevent link default on first click, toggle submenu
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Close other submenus if you want only one open at a time
      document.querySelectorAll('.menu-item.open').forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove('open');
        }
      });

      item.classList.toggle('open');
    });
   }
  });


});
