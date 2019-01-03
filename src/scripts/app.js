import CardsPersons from './../modules/persons'
import SwiperDepoiments from './../modules/swiper'
import Photoswipe from './../modules/photoswipe'
import { SingleLine } from './helpers/SingleLine'

const str = SingleLine`
  <li class="person col-md-4">
    <div class="content">
      Olar
    </div>
  </li>
`
console.log(str)

document.addEventListener('DOMContentLoaded', function() {
  SwiperDepoiments()
  CardsPersons()
  Photoswipe()
})


