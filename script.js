document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger?.addEventListener('click', () => {
    menu?.classList.toggle('show');
  });

  document.querySelectorAll('.menu-item').forEach((item) => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.menu-item.open').forEach(openItem => {
          if (openItem !== item) openItem.classList.remove('open');
        });
        item.classList.toggle('open');
      });
    }
  });

  // Scroll function logic remains inside to keep variables clean
  window.onscroll = function() { scrollFunction() };
});

// MOVE THESE OUTSIDE the DOMContentLoaded block
function scrollFunction() {
  let mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  // Use scrollTo for better compatibility with modern Chrome
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: makes it slide up instead of jumping
  });
}
