let currentSlide = 0;

function nextSlide() {
  const slider = document.querySelector('.slider');
  const totalSlides = Math.ceil(slider.children.length / 4); 
  currentSlide = (currentSlide + 1) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`; 
}

function prevSlide() {
  const slider = document.querySelector('.slider');
  const totalSlides = Math.ceil(slider.children.length / 4); 
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  slider.style.transform = `translateX(-${currentSlide * 100}%)`; 
}


function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
