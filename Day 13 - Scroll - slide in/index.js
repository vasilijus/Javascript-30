function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
    //   console.log("cont:", context,"args:", args);
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
    //   console.log('callNow:',callNow);
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages = document.querySelectorAll('.slide-in');

  function checkSlide(e) {
    //   console.count(e);
    sliderImages.forEach(slideImage => {
        // halfway throu the image
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
        // bottom of the image
        const imageBottom = slideImage.offsetTop;
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if ( isHalfShown && isNotScrolledPast ) {
            slideImage.classList.add('active');
        } else {
            slideImage.classList.remove('active');
        }
    })

  }
  window.addEventListener('scroll', debounce(checkSlide, 50) );