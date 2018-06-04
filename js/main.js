/*
function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(2000);
  
  $('.projects').hide();
  
$('.projects-button').on('click', function() {
	$(this).next().slideToggle(500);
    $(this).toggleClass('active');
	$(this).text('Projects Viewed');
  });

}

$(document).ready(main);
*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
} 

function showHideAudio(id) {
	element = document.getElementById(id);
	getComputedStyle(element, null).display == 'none' ? element.style.display = "block" : element.style.display = "none";
}
//	console.log(element.currentStyle ? element.currentStyle.display : getComputedStyle(element, null).display);


