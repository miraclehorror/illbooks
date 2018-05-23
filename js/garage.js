/**

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
  var numbering = document.getElementsByClassName("slide-number-down");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < numbering.length; i++) {
      numbering[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  numbering[slideIndex-1].style.display = "inline";
  dots[slideIndex-1].className += " active";
} 



function showExplanation() {
  var i;
  var explanations = document.getElementsByClassName("explanation");
  for (i = 0; i < explanations.length; i++) {
	  explanations[i].style.display = "none";	
  }
}

*/

function showExplanation(artefact) {
  var explanation = document.getElementById(artefact);
  explanation.style.display = "block";	
}



