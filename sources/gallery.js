var pos = 0;
next(0);

// takes 1, 0, or -1, to determine current slide shown
function next(n) {
  var slides = document.getElementsByClassName("slideimg");
  var count = document.getElementById("imgcount");
  
  if(pos + n > slides.length - 1)
    pos = 0;
  else if(pos + n < 0)
    pos = slides.length - 1;
  else
    pos += n;
  
  for(var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[pos].style.display = "block";
  count.innerHTML = `${pos + 1} / ${slides.length}`;
}