import $ from 'jquery'
import PhotoSwipe from 'photoswipe'
import UIDefault from 'photoswipe/dist/photoswipe-ui-default';

class Gallery {

  constructor(gallery) {
    this.galleryElements = document.querySelectorAll(gallery)
    this.wrapper = document.querySelector('.pswp')
    this.hashData = this.photoswipeParseHash()
    this.elements = []
  }

  start() {
    this.galleryElements.forEach((gallery, i) => {
      gallery.setAttribute('data-pswp-uid', i+1)
      $(gallery).on('click', (e) => this.onThumbnailsClick(e) )
    })

    if(this.hashData.pid && this.hashData.gid)
      this.openPhotoSwipe( this.hashData.pid, this.galleryElements[this.hashData.gid - 1], true, true )
  }

  onThumbnailsClick(e) {
    e.preventDefault()
    let that = this,
        clickedItem = $(e.target).closest('figure')[0],
        clickedGallery = clickedItem.parentNode,
        childNodes = [...clickedGallery.childNodes],
        index;

    if(!clickedItem) return

    if(!that.elements.length)
      childNodes.map( item => {
        if(item.nodeType !== 3) that.elements.push(item)
      })

    that.elements.filter((item, i) => {
      if(item === clickedItem) index = i
    })

    this.openPhotoSwipe( index, clickedGallery )

    return false;
  }

  photoswipeParseHash() {
    let hash = window.location.hash.substring(1),
        params = [
          ...new URLSearchParams(hash).entries()
        ].reduce((sum, [key,val]) => Object.assign({
          [key]:val
        }, sum), {})

    return params;
  }

  openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
    let pswpElement = this.wrapper,
        gallery,
        options,
        items;
    items = this.parseThumbnailElements(galleryElement);

    options = {
      galleryUID: galleryElement.getAttribute('data-pswp-uid'),

      getThumbBoundsFn: function(index) {
        var thumbnail = items[index].el.getElementsByTagName('img')[0],
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
      if(options.galleryPIDs) {
        for(var j = 0; j < items.length; j++) {
          if(items[j].pid == index) {
            options.index = j;
            break;
          }
        }
      } else {
        options.index = parseInt(index, 10) - 1;
      }
    } else {
      options.index = parseInt(index, 10);
    }

    // exit if index not found
    if( isNaN(options.index) ) {
      return;
    }

    if(disableAnimation) {
      options.showAnimationDuration = 0;
    }

    gallery = new PhotoSwipe( pswpElement, UIDefault, items, options)
    gallery.init();
  }

  parseThumbnailElements(el) {
    var thumbElements = el.childNodes,
    numNodes = thumbElements.length,
    items = [],
    figureEl,
    linkEl,
    size,
    item;

    for(var i = 0; i < numNodes; i++) {
      figureEl = thumbElements[i]

      if(figureEl.nodeType !== 1) continue

      linkEl = figureEl.children[0]

      size = linkEl.getAttribute('data-size').split('x')

      item = {
        src: linkEl.getAttribute('href'),
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };

      if(figureEl.children.length > 1) 
        item.title = figureEl.children[1].innerHTML

      if(linkEl.children.length > 0)
        item.msrc = linkEl.children[0].getAttribute('src')

      item.el = figureEl
      items.push(item)
    }

    return items
  }

}

export default Gallery
