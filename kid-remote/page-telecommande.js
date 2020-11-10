"user strict";

// j'écoute l'évènement "click" de la première touche de ma télécommande
document.querySelector("main > ul > li:nth-of-type(1)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/cat.mp3"); // je créé un objet audio appelé "bruit"
  bruit.play(); // je joue ce bruit
});

// même chose avec les autres touches de ma télécommande

document.querySelector("main > ul > li:nth-of-type(2)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/chien.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(3)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/elephant.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/clochette.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(5)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/klaxon.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(6)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/kid/santa.mp3");
  bruit.play();
});