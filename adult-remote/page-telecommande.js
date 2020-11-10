"user strict";

// j'écoute l'évènement "click" de la première touche de ma télécommande
document.querySelector("main > ul > li:nth-of-type(1)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/cestclair.mp3"); // je créé un objet audio appelé "bruit"
  bruit.play(); // je joue ce bruit
});

// même chose avec les autres touches de ma télécommande²²

document.querySelector("main > ul > li:nth-of-type(2)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/chirac.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(3)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/honteux.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/non.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(5)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/sucer.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(6)").addEventListener("click", (event) => {
  let bruit = new Audio("sons/adult/taisezvous.mp3");
  bruit.play();
});