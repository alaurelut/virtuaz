function highlightElement(elem){
  var characterName = elem.srcElement.getAttribute('id');
  if (displayedCharacter != characterName) {
    displayCharacterInfo(characterName);
  }
}
function displayCharacterInfo(characterName){
  var newDisplayedCharacter = document.getElementById('infos-' + characterName);
  newDisplayedCharacter.style.display = "block";
  if (displayedCharacter !== null ) {
    document.getElementById('infos-' + displayedCharacter).style.display = "none";
  }
  displayedCharacter = characterName;
}

var displayedCharacter = 'noodle';

var twoD = document.getElementById('twoD');
twoD.addEventListener("click", highlightElement);

var noodle = document.getElementById('noodle');
noodle.addEventListener("click", highlightElement);

var murdok = document.getElementById('murdok');
murdok.addEventListener("click", highlightElement);

var russel = document.getElementById('russel');
russel.addEventListener("click", highlightElement);
