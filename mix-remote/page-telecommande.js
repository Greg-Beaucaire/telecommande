"user strict";

// j'écoute l'évènement "click" de la première touche de ma télécommande
document.querySelector("#versionkid main > ul > li:nth-of-type(1)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/cat.mp3"); // je créé un objet audio appelé "bruit"
  bruit.play(); // je joue ce bruit
});

// même chose avec les autres touches de ma télécommande

document.querySelector("#versionkid main > ul > li:nth-of-type(2)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/chien.mp3");
  bruit.play();
});

document.querySelector("#versionkid main > ul > li:nth-of-type(3)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/elephant.mp3");
  bruit.play();
});

document.querySelector("#versionkid main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/clochette.mp3");
  bruit.play();
});

document.querySelector("#versionkid main > ul > li:nth-of-type(5)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/klaxon.mp3");
  bruit.play();
});

document.querySelector("#versionkid main > ul > li:nth-of-type(6)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/santa.mp3");
  bruit.play();
});


// Version adulte avec un autre sélécteur afin de target la deuxième ul
document.querySelector("#versionadult main > ul > li:nth-of-type(1)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/cestclair.mp3"); // je créé un objet audio appelé "bruit"
  bruit.play(); // je joue ce bruit
});

// même chose avec les autres touches de ma télécommande

document.querySelector("#versionadult main > ul > li:nth-of-type(2)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/chirac.mp3");
  bruit.play();
});

document.querySelector("#versionadult main > ul > li:nth-of-type(3)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/honteux.mp3");
  bruit.play();
});

document.querySelector("#versionadult main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/non.mp3");
  bruit.play();
});

document.querySelector("#versionadult main > ul > li:nth-of-type(5)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/sucer.mp3");
  bruit.play();
});

document.querySelector("#versionadult main > ul > li:nth-of-type(6)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/taisezvous.mp3");
  bruit.play();
});





function toggleTheme() {
  var theme = document.getElementById("triggertheme").value;

  var myThemeKid = document.getElementById('versionkid');
  var myThemeAdult = document.getElementById('versionadult');

  if (theme == 'Version Enfant') {
    myThemeKid.style.display = 'block';
    myThemeAdult.style.display = 'none';
  }

  if (theme == 'Version Adulte') {
    myThemeKid.style.display = 'none';
    myThemeAdult.style.display = 'block';
  }
};