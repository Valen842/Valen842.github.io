"use strict";

window.addEventListener("load", () => {
  mouseEffects();
  var showAboutMe = true; 
  toggleSections();
  updateButtonText();

  var toggleButton = document.querySelector(".botton");

  toggleButton.addEventListener("click", () => {
    showAboutMe = !showAboutMe; 
    toggleSections();
    updateButtonText(toggleButton); 
  });






  function toggleSections() {
    var aboutMeSection = document.querySelector(".about-me");
    var cvSection = document.querySelector(".cv");

    if (showAboutMe) {
      aboutMeSection.style.display = "block";
      cvSection.style.display = "none";
    } else {
      aboutMeSection.style.display = "none";
      cvSection.style.display = "block";
    }
  }

  function updateButtonText() {
    var toggleButton = document.querySelector(".botton");
    toggleButton.textContent = showAboutMe ? "View CV" : "About Me";
  }
});




function mouseEffects(){
  clicks();
  hover();
}



function clicks(){
  var etrr = document.querySelector(".img-etrr");
  var fce = document.querySelector(".img-fce");
  var gottert = document.querySelector(".img-gottert");
  var github = document.querySelector('.img-git');
  var linkedin = document.querySelector('.img-in');
  var twitter = document.querySelector('.img-x');

  etrr.addEventListener("click", function () {
    window.location.href = "http://www.tecnicarobertorocca.edu.ar/campana";
  });

  fce.addEventListener("click", function () {
    window.location.href = "https://www.cambridgeenglish.org/exams-and-tests/first/";
  });

  gottert.addEventListener("click", function () {
    window.location.href = "https://www.gottert.com.ar/";
  });

  github.addEventListener("click", function () {
    window.location.href = "https://github.com/Valen842";
  });

  linkedin.addEventListener('click', function(){
    window.location.href = 'https://www.linkedin.com/in/valentino-bisbano-068413259/';
  });

  twitter.addEventListener('click', function(){
    window.location.href = 'https://twitter.com/Valenbisbano';
  });
}

function hover(){
  var cisco = document.querySelector('.text-cisco');  
  var pythonImage = document.querySelector('.python');
  var freeCodeCampImage = document.querySelector('.freeCodeCamp');
  var freeCodeCamp = document.querySelector('.text-freeCodeCamp');
 

  cisco.addEventListener('mouseover', function () {
    pythonImage.classList.add('active');
  });

  freeCodeCamp.addEventListener('mouseover', function () {
    freeCodeCampImage.classList.add('active');
  });
}