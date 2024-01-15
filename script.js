"use strict";

window.addEventListener("load", () => {
  var etrr = document.querySelector(".img-etrr");
  var fce = document.querySelector(".img-fce");
  var gottert = document.querySelector("img-gottert");


  etrr.addEventListener("click", function () {
    window.location.href = "http://www.tecnicarobertorocca.edu.ar/campana";
  });

  fce.addEventListener("click", function () {
    window.location.href = "https://www.cambridgeenglish.org/exams-and-tests/first/";
  });

  gottert.addEventListener("click", function () {
    window.location.href = "https://www.gottert.com.ar/";
  });

});
