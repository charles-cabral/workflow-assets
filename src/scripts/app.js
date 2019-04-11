import CardsPersons from './../modules/persons'
import SwiperDepoiments from './../modules/swiper'
import Photoswipe from './../modules/photoswipe'
import { SingleLine } from './helpers/SingleLine'
import Tips from './../modules/tips'

const str = SingleLine`
  <li class="person col-md-4">
    <div class="content">String</div>
  </li>
`
console.log( 'SingleLine: ', str )

document.addEventListener('DOMContentLoaded', function() {
  Tips()
  SwiperDepoiments()
  CardsPersons()
  Photoswipe()
})


