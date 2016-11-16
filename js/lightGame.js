function highlightElement(elem){
  console.log('highlightElement');
  console.log(elem);
  // elem.style.opacity = 1;
  displayCharacterInfo(elem.srcElement.getAttribute('id'));
}

var displayedCharacter = 'noodle';

function displayCharacterInfo(characterName){
  console.log('displayCharacterInfo');
  console.log(characterName);
  var newDisplayedCharacter = document.getElementById('infos-' + characterName);
  newDisplayedCharacter.style.display = "block";
  if (displayedCharacter !== null ) {
    document.getElementById('infos-' + displayedCharacter).style.display = "none";
  }
  displayedCharacter = characterName;
}

var twoD = document.getElementById('twoD');
twoD.addEventListener("click", highlightElement);

var noodle = document.getElementById('noodle');
noodle.addEventListener("click", highlightElement);

var murdok = document.getElementById('murdok');
murdok.addEventListener("click", highlightElement);

var russel = document.getElementById('russel');
russel.addEventListener("click", highlightElement);
