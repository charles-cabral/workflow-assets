import CardsPersons from './../modules/persons'
import SwiperDepoiments from './../modules/swiper'
import Photoswipe from './../modules/photoswipe'
import { SingleLine } from './helpers/SingleLine'
import { chunk } from 'lodash'

const lodash = chunk(['a', 'b', 'c', 'd'], 2)
console.log('lodash:', lodash)

const str = SingleLine`
  <li class="person col-md-4">
    <div class="content">String</div>
  </li>
`
console.log('SingleLine: ', str)

document.addEventListener('DOMContentLoaded', function() {
  SwiperDepoiments()
  CardsPersons()
  Photoswipe()
})


