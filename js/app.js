 (function() {
    if(!document.querySelectorAll || !window.addEventListener) {
      document.getElementById('old-browser-heading').style.display = 'block';
      document.getElementById('main').style.display = 'none';
      return;
    }

    lazyLoad();

    function lazyLoad() {
    /* lazyload.js (c) Lorenzo Giuliani
     * MIT License (http://www.opensource.org/licenses/mit-license.html)
     *
     * expects a list of:
     * `<img src="blank.gif" data-src="my_image.png" width="600" height="400" class="lazy">`
     */
      function loadImage (el, fn) {
        var img = new Image()
          , src = el.getAttribute('data-src');
        img.onload = function() {
          if (!! el.parent)
            el.parent.replaceChild(img, el)
          else
            el.src = src;
          if(el.className.indexOf("loaded") === -1)
            el.className += " loaded";
          fn? fn() : null;
        }
        img.src = src;
      }

      function elementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
           rect.top    >= 0
        && rect.left   >= 0
        && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        )
      }

      var images = new Array(),
          query = document.querySelectorAll('img.lazy'),
          processScroll = function() {
            for (var i = 0; i < images.length; i++) {
              if (elementInViewport(images[i])) {
                loadImage(images[i], function () {
                  images.splice(i, i);
                });
              }
            };
          };
        // Array.prototype.slice.call is not callable under our lovely IE8
      for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
      };
      processScroll();
      addEventListener('scroll',processScroll);
    }
}());
