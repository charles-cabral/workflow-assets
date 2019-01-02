import renderContainer from './js/Html';
import Pswp from './js/Pswp';

export default function() {
  renderContainer()
  const galeria = new Pswp('.gallery')
  return galeria.start()
}
