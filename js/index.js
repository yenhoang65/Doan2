
var index = 0;
  changeImage = function () {
    var imgs = ["img5.jpg", "img6.jpg","img7.jpg"];
    document.getElementById("img").src = imgs[index];
    index++;
    if (index == 3) {
      index = 0;
    }
  };
  setInterval(changeImage, 2000);
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
