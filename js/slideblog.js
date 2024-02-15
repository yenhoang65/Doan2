
let sIndex = 1;
showSlide(sIndex);

// Thumbnail image controls
function current(n) {
    showSlide(sIndex = n);
  }

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("mySlide");
    var dots = document.getElementsByClassName("dt");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    sIndex++;
    if (sIndex> slides.length) {sIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[sIndex-1].style.display = "block";
    dots[sIndex-1].className += " active";
}
