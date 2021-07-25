let settings = {
  slide_interval: 5000, // Time (ms)
  transition_duration: 750, // Time (ms)
  autoplay: true,
};

document.addEventListener("DOMContentLoaded", function (event) {
  /* 
    -------------------
    Setup the slideshow
    -------------------
  */
  let counter = 0;
  let slideInterval;
  const slideshow = document.querySelector("#swd-slideshow");

  // create arrow elements
  let leftArrowElement = '<span class="arrow-left arrow">&#10092;</span>';
  let rightArrowElement = '<span class="arrow-right arrow">&#10093;</span>';

  // insert left arrow
  slideshow.innerHTML += leftArrowElement;
  // insert right arrow
  slideshow.innerHTML += rightArrowElement;

  // define inner element variables
  const slides = document.querySelectorAll("#swd-slideshow > div");
  const arrowLeft = document.querySelector("#swd-slideshow .arrow-left");
  const arrowRight = document.querySelector("#swd-slideshow .arrow-right");

  // set transition-duration in css
  slides.forEach((slide) => {
    slide.style.transitionDuration = settings.transition_duration + "ms";
  });

  /* 
    -------------------
    Slideshow mechanics
    -------------------
  */

  // click right arrow
  arrowRight.addEventListener("click", function () {
    nextSlide();
  });

  // click left arrow
  arrowLeft.addEventListener("click", function () {
    prevSlide();
  });

  // start the slider
  startSlider();

  // stop slideshow when mouseover on arrows
  arrowLeft.addEventListener("mouseover", function () {
    clearInterval(slideInterval);
  });
  arrowRight.addEventListener("mouseover", function () {
    clearInterval(slideInterval);
  });

  // start slideshow again when mouseleave on arrows
  arrowLeft.addEventListener("mouseleave", function () {
    if (settings.autoplay) {
      startAutoplay();
    }
  });

  arrowRight.addEventListener("mouseleave", function () {
    if (settings.autoplay) {
      startAutoplay();
    }
  });

  /* 
    -------------------
    Function Declaration 
    --------------------
  */

  // reset to the first slide
  function reset() {
    counter = 0;
    showSlide(counter);
  }

  // next slide
  function nextSlide() {
    hideSlide(counter);

    if (++counter === slides.length) {
      counter = 0;
    }

    showSlide(counter);
  }

  // prev slide
  function prevSlide() {
    hideSlide(counter);

    if (--counter === -1) {
      counter = slides.length - 1;
    }

    showSlide(counter);
  }

  function hideSlide(counter) {
    slides[counter].style.opacity = 0;
  }

  function showSlide(counter) {
    slides[counter].style.opacity = 1;
  }

  // autoplay function
  function startAutoplay() {
    slideInterval = setInterval(nextSlide, settings.slide_interval);
  }

  // start the slider
  function startSlider() {
    reset();
    // start autoplay if true
    if (settings.autoplay) {
      startAutoplay();
    }
  }
});
