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

// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
}
);

//testimoni
let currentSlide = 0;

  function moveSlide(step) {
    const slider = document.getElementById("testimonial-slider");
    const slides = slider.children;
    const isMobile = window.innerWidth < 1024;

    const visibleSlides = isMobile ? 1 : 3;
    const totalPages = Math.ceil(slides.length / visibleSlides);

    currentSlide += step;

    if (currentSlide >= totalPages) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = totalPages - 1;
    }

    const container = slider.parentElement;
    const containerWidth = container.offsetWidth;
    const translateX = currentSlide * containerWidth;

    slider.style.transform = `translateX(-${translateX}px)`;
  }

  window.addEventListener("resize", () => moveSlide(0));