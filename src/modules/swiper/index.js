import $ from 'jquery'
import Swiper from 'swiper'
import depoiments from './lib/model'
import renderDepoiments from './lib/view'

export default function() {

	$(document).ready(function () {

    renderDepoiments(depoiments)

		new Swiper('.swiper-container', {
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
    })
	})
}


