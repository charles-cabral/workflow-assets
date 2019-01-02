import wrapper from './js/wrapper';
import Pswp from './js/Pswp';

export default function() {
  wrapper()
  const galeria = new Pswp('.gallery')
  return galeria.start()
}
