import $ from 'jquery'
import PhotoSwipe from 'photoswipe'
import UIDefault from 'photoswipe/dist/photoswipe-ui-default';

class Pswp {

  constructor(gallery) {
    this.galleries = document.querySelectorAll(gallery)
    this.wrapper = document.querySelector('.pswp')
    this.hash = this.parseHash()
    this.gallery = []
    this.items = {}
    this.options = {}
    this.pswp = {}
  }

  start() {
    this.galleries.forEach((gallery, i) => {
      gallery.setAttribute('data-pswp-uid', i+1)
      $(gallery).on('click', (e) => this.thumbClick(e) )
    })

    if(this.hash.pid && this.hash.gid)
      this.openPswp( this.hash.pid, this.galleries[this.hash.gid - 1], true, true )
  }

  thumbClick(e) {
    e.preventDefault()
    let that = this,
        clickedItem = $(e.target).closest('figure')[0],
        clickedGallery = clickedItem.parentNode,
        childNodes = [...clickedGallery.childNodes],
        pid;

    if(!clickedItem) return

    if(!that.gallery.length)
      childNodes.map( item => {
        if(item.nodeType !== 3) that.gallery.push(item)
      })

    that.gallery.filter((item, index) => {
      if(item === clickedItem) pid = index
    })

    this.openPswp( pid, clickedGallery )

    return false;
  }

  parseHash() {
    let hash = window.location.hash.substring(1),
        params = [
          ...new URLSearchParams(hash).entries()
        ].reduce((sum, [key,val]) => Object.assign({
          [key]:val
        }, sum), {})

    return params;
  }

  openPswp(index, galleryElement, disableAnimation, fromURL) {
    let that = this

    that.items = that.parseItems(galleryElement);

    that.options = {
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),
      getThumbBoundsFn: function(index) {
        var thumbnail = that.items[index].el.getElementsByTagName('img')[0],
        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
        rect = thumbnail.getBoundingClientRect();
        return {
          x:rect.left,
          y:rect.top + pageYScroll,
          w:rect.width
        }
      }

    };

    if(fromURL) {
      if(that.options.galleryPIDs) {
        for(var j = 0; j < that.items.length; j++) {
          if(that.items[j].pid == index) {
            that.options.index = j;
            console.log('um', j)
            break;
          }
        }
      } else {
        that.options.index = parseInt(index, 10) - 1;
        console.log('dois', index-1)
      }
    } else {
      that.options.index = parseInt(index, 10);
      console.log('tres', index)
    }

    if(disableAnimation)
      that.options.showAnimationDuration = 0

    that.pswp = new PhotoSwipe( that.wrapper, UIDefault, that.items, that.options)
    that.pswp.init();
    console.log(this)
  }

  parseItems(el) {
    var thumbElements = el.childNodes,
        numNodes = thumbElements.length,
        items = [],
        figureEl,
        linkEl,
        size,
        item
        // childNodes = [...el.childNodes]

    
      // childNodes.map( item => {
      //   if(item.nodeType !== 3) that.gallery.push(item)
      // })

    for(var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]

      if(figureEl.nodeType !== 1) continue

      linkEl = figureEl.children[0]

      size = linkEl.getAttribute('data-size').split('x')

      item = {
        src: linkEl.getAttribute('href'),
        msrc: linkEl.children[0].getAttribute('src'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };

      if(figureEl.children.length > 1)
        item.title = figureEl.children[1].innerHTML

      item.el = figureEl
      items.push(item)
    }

    // console.log(items)

    return items
  }
}

export default Pswp
