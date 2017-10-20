
var pCatButton = document.getElementById("bookButton");
var collapseDiv1 = document.getElementById("contactForm");

var fullSection = false;


function divStart(currentDiv){
if (fullSection === false){
  currentDiv.style.display = "none";
}
};

divStart(collapseDiv1);

var openDiv = function(){

  if (fullSection === false){
    fullSection = true;
    collapseDiv1.style.display = "block";} else {
      fullSection = false;
      divStart(collapseDiv1);
    }
  };

  pCatButton.addEventListener('click', openDiv);
