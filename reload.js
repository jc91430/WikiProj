//Reload the iframe with a random page from one interested category
//Need to add in mobile/desktop switching. Currently locked into mobile
var hardcoded = ["Beaches_of_Japan", "Pastries", "Tea", "Island_countries", "Gundam"];

function reload() {

  //Temporary, move later
  setPreferences();

  var categories = getCategories();
  var n = Math.floor(Math.random() * categories.length);

  console.log("Current category: " + categories[n]);
  document.getElementById("frame").src =
    "https://en.m.wikipedia.org/wiki/Special:RandomInCategory/" + categories[n];
}

//Return array of user-interested categories
function getCategories() {
  return document.cookie.split("#");
}

//Set cookie of user-selected preferred categories
function setPreferences() {
  document.cookie = "preferences=" + hardcoded.join("#") + ";";
}