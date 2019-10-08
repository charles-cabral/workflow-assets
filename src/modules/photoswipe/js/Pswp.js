import $ from 'jquery'
import PhotoSwipe from './lib/photoswipe'
import UIDefault from './lib/photoswipe-ui'

class Pswp {

  constructor(gallery) {
    this.galleries = document.querySelectorAll(gallery)
    this.wrapper = document.querySelector('.pswp')
    this.hash = this.parseHash()
    this.childrens = []
    this.items = {}
    this.options = {}
    this.pswp = {}
  }

  start() {
    let that = this,
        currentGallery

    that.galleries.forEach((gallery, i) => {
      gallery.setAttribute('data-pswp-uid', i+1)
      $(gallery).on('click', (e) => that.thumbClick(e) )
    })

    if(that.hash.pid && that.hash.gid)
      currentGallery = that.galleries[that.hash.gid - 1],
      that.items = that.parseItems(currentGallery),
      that.openPswp( that.hash.pid, currentGallery, true, true )

  }

  thumbClick(e) {
    e.preventDefault()

    let that = this,
        clickedItem = $(e.target).closest('figure')[0],
        clickedGallery = clickedItem.parentNode,
        pid;

    if(!that.childrens.length)
      that.items = that.parseItems(clickedGallery)

    that.childrens.filter((item, index) => {
      if(item === clickedItem) pid = index
    })

    that.openPswp( pid, clickedGallery )

    return false
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

  openPswp(pid, gallery, disableAnimation, fromURL) {
    let that = this,
        currentItem = null
    that.options = {
      history: false,
      galleryUID: $(gallery).data('pswp-uid'),
      getThumbBoundsFn: (index) => {
        var thumbnail = $(that.items[index].el).find('img')[0],
        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
        rect = thumbnail.getBoundingClientRect()
        return {
          x:rect.left,
          y:rect.top + pageYScroll,
          w:rect.width
        }
      }
    }

    if(fromURL) {
      if(that.options.galleryPIDs) {
        currentItem = that.items.filter((item, index) => {if(index === pid) return index} )
        that.options.index = currentItem
      } else {
        that.options.index = parseInt(pid, 10) - 1;
      }
    } else {
      that.options.index = parseInt(pid, 10);
    }

    if(disableAnimation)
      that.options.showAnimationDuration = 0

    that.pswp = new PhotoSwipe( that.wrapper, UIDefault, that.items, that.options)
    that.pswp.init()
  }

  parseItems(gallery) {
    let that = this,
        items = [],
        childrens = [...$(gallery).children()]

      childrens.map( item => {
        if(item.nodeType !== 3) that.childrens.push(item)
      })

      that.childrens.forEach( child => {
        let link = $(child).find('.link'),
            size = link.data('size').split('x'),
            thumb = link.find('img'),
            item = {
              el: child,
              src: link.attr('href'),
              title: link.attr('title'),
              msrc: thumb.attr('src'),
              w: size[0],
              h: size[1]
            }
            items.push(item)
      })
    return items
  }
}

export default Pswp
