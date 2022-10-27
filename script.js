// Manipulation du DOM
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const display = document.getElementById("display");

// Compte
submit.onclick = () => {
  // on récupère le texte saisi
  const wordsString = input.value;
  // chaîne de caractères -> liste (après chaque espace)
  const wordsArray = wordsString.split(" ");
  // nombre de mots présents dans la liste
  const wordsLength = wordsArray.length;

  // affichage du nombre de mots
  display.innerText = `Ce texte comporte ${wordsLength} mots !`;
};
