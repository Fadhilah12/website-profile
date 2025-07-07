//Navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};
//navbar header
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-blue-600');
  } else {
    navbar.classList.remove('bg-blue-600');
    navbar.classList.add('bg-transparent');
  }
});

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
}
);
;