var color = ["#4ac8f4", "#ffffff", "#d6d6d6", "#06657e", "#0f0f0f"];
var i = 0;

document.getElementById('changeColor').addEventListener("click", function() {
  i = i < color.length ? ++i : 0;
document.querySelector("body").style.background = color[i];
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
               