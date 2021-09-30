import 'bootstrap';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../../node_modules/swiper/swiper-bundle';

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 10
    },
  },
  
});