 (function() {
    if(!document.querySelectorAll || !window.addEventListener) {
      document.getElementById('old-browser-heading').style.display = 'block';
      document.getElementById('main').style.display = 'none';
      return;
    }
    var toTop = document.getElementById('to-top');
    toTop.addEventListener('click', function(e){
        e.preventDefault();
        scrollToTop(650);
    });

    lazyLoad();

    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15),
            scrollInterval = setInterval(function(){
            if ( window.scrollY != 0 ) {
                window.scrollBy( 0, scrollStep );
            }
            else clearInterval(scrollInterval); 
        },15);
    } 

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
          processScroll = function(e) {
            for (var i = 0; i < images.length; i++) {
              if (elementInViewport(images[i])) {
                loadImage(images[i], function () {
                  images.splice(i, i);
                });
              }
            }

            if(window.scrollY > 200)
                toTop.style.display = '';
            else
                toTop.style.display = 'none';
          };
      for (var i = 0; i < query.length; i++) {
        images.push(query[i]);
      };

      processScroll();
      window.addEventListener('scroll',processScroll);
    }
}());
