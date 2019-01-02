// import $ from 'jquery'
// import URLify from '../../../scripts/helpers/URLify'
// import PhotoSwipe from 'photoswipe'
// import UIDefault from 'photoswipe/dist/photoswipe-ui-default';
//   clickThumb(e) {
//     e.preventDefault()
//     let that =this,
//         pid = URLify($(e.target).closest('.link').attr('title')),
//         index = null,
//         options = {
//           galleryUID: 1,
//           getThumbBoundsFn: function(index) {
//             // See Options -> getThumbBoundsFn section of documentation for more info
//             var thumbnail = $(that.items[index]).find('img')[0], // find thumbnail
//             pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
//             rect = thumbnail.getBoundingClientRect();

//             console.log(thumbnail)
//             return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
//           }
//       };

//     that.items.filter((item, i) => {
//       if(item.pid === pid) index = i
//     })
//     console.log(parseInt(index, 10))
//     let gallery = new PhotoSwipe( this.wrapper, UIDefault, this.items, options)
//     gallery.init();

//   }

//   open(i) {
//     // console.log(this.options)
//     // this.photoswipe.goTo();
//     console.log(i)
//     // this.options.getThumbBoundsFn = (el) => {
//     //     console.log(el)
//     //     // let pageYScroll = window.pageYOffset;
//     //     // return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
//     // }
//     // console.log(this.options)
    
//   }

//   start() {
//     console.log(this)
//     this.photoswipe.init()
//     this.photoswipe.close()
//   }