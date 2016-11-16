function highlightElement(elem){
  console.log('highlightElement');
  console.log(elem);
  elem.srcElement.style.opacity = 1;
}

var twoD = document.getElementById('twoD');
twoD.addEventListener("click", highlightElement);

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
  });
