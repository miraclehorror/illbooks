

function showExplanation(artefact) {
  var i;
  var explanations = document.getElementsByClassName("explanation");	
  var explanation = document.getElementById(artefact);
  
  for (i=0; i < explanations.length; i++) {
	  explanations[i].style.display = "none";
  }
  
  explanation.style.display = "block";	
}



