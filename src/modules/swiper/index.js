import $ from 'jquery'
import Swiper from 'swiper'
import depoiments from './js/Data'
import renderDepoiments from './js/Ui'

export default function() {

  renderDepoiments(depoiments)

	$(document).ready(function () {
		// eslint-disable-next-line no-unused-vars
		const swiperDepoiments = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
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
    })
	})
}


