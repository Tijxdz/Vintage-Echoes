document.addEventListener("DOMContentLoaded", function () {
  var slides = document.getElementsByClassName("slideshow-slide");
  var slideIndex = 0;

  function showSlide() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].classList.add("active");

    setTimeout(showSlide, 5000);
  }

  showSlide();
  
});
