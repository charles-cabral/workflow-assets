import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';
import depoiments from "./lib/model";
import sliderView from "./lib/view";

sliderView(depoiments)

const SwiperDepoiments = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


export default SwiperDepoiments;