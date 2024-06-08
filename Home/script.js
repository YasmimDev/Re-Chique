function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.carousel-inner img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

showSlides();