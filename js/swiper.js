var moonkeySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    // loop: true,
    mousewheelControl: true,
    hashnav: true,
    paginationClickable: true,

    // If we need pagination
    pagination: '.swiper-pagination',
    paginationBulletRender: function ( index) {
       return '<span class="swiper-pagination-bullet slide-' + (index + 1) + '"></span>';
   },

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // And if we need scrollbar
    scrollbar: '.swiper-scrollbar',
  });
