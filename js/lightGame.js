function highlightElement(elem){
  console.log('highlightElement');
  console.log(elem);
  elem.srcElement.style.opacity = 1;
}

var twoD = document.getElementById('twoD');
twoD.addEventListener("click", highlightElement);
