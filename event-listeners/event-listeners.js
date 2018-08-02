// YOUR TASK: Add more pictures!
var pictures = ['./imgs/dog.jpg' , './imgs/dead.jpeg', './imgs/free-fly.jpeg', './imgs/do-kanfy.jpeg' , './imgs/pailot-cabin.jpeg', './imgs/pasnger-window.jpeg', './imgs/window.jpeg'] ; 
var currentIndex = 0;
document.getElementsByTagName('img')[0].addEventListener("click", showNextPicture)
function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  var pic  = document.getElementsByTagName('img')
  pic[0].src = pictures[currentIndex];
}

  // YOUR TASK: Finish this function!

