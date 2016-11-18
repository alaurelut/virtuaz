var buzz = new Audio('sound/buzz.mp3');
var sea = new Audio('sound/sea.mp3');
buzz.loop = true;
sea.loop = true;

var moonkeySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    // loop: true,
    mousewheelControl: true,
    hashnav: true,
    paginationClickable: true,

    // If we need pagination
    pagination: '.swiper-pagination',
    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
    onSlideChangeEnd: function(slide){
      console.log(slide);
      if (slide.activeIndex === 0) {
        sea.play();
      }
      else {
        if (!sea.paused) {
          sea.pause();
        }
      }

      if (slide.activeIndex === 1) {
        buzz.play();
      }
      else {
        if (!buzz.paused) {
          buzz.pause();
        }
      }
    },
    onInit: function(slide){
      console.log('init');
      console.log(slide);
      if (slide.activeIndex === 0) {
        sea.play();
      }
      else {
        if (!sea.paused) {
          sea.pause();
        }
      }

      if (slide.activeIndex === 1) {
        buzz.play();
      }
      else {
        if (!buzz.paused) {
          buzz.pause();
        }
      }
    }
  });
