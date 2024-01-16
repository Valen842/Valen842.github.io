"use strict";

window.addEventListener("load", () => {
  mouseEffects();


});



function mouseEffects(){
  var etrr = document.querySelector(".img-etrr");
  var fce = document.querySelector(".img-fce");
  var gottert = document.querySelector(".img-gottert");
  var github = document.querySelector('.img-git');
  var linkedin = document.querySelector('.img-in');
  var twitter = document.querySelector('.img-x');
  var cisco = document.querySelector('.text-cisco');  
  var pythonImage = document.querySelector('.python');



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

  cisco.addEventListener('mouseover', function () {
    pythonImage.classList.add('active');
});
}
