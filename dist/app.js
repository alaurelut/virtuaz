function highlightElement(elem){
  var characterName = elem.srcElement.getAttribute('id');
  if (displayedCharacter != characterName) {
    elem.srcElement.src = elem.srcElement.src.replace('.png', '') + "-selected.png";

    displayCharacterInfo(characterName);
  }
}
function displayCharacterInfo(characterName){
  var newDisplayedCharacter = document.getElementById('infos-' + characterName);
  newDisplayedCharacter.style.display = "block";
  if (displayedCharacter !== null ) {
    document.getElementById('infos-' + displayedCharacter).style.display = "none";
    var oldCharacter = document.getElementById(displayedCharacter);
    oldCharacter.src = oldCharacter.src.replace('-selected', '');
  }
  displayedCharacter = characterName;
}

var displayedCharacter = 'russel';

var twoD = document.getElementById('twoD');
twoD.addEventListener("click", highlightElement);

var noodle = document.getElementById('noodle');
noodle.addEventListener("click", highlightElement);

var murdok = document.getElementById('murdok');
murdok.addEventListener("click", highlightElement);

var russel = document.getElementById('russel');
russel.addEventListener("click", highlightElement);

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
