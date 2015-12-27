//Reload the iframe with a random page from one interested category
//Need to add in mobile/desktop switching. Currently locked into mobile
function reload() {
  var pages = getCategories();
  var n = Math.floor(Math.random() * pages.length);

  console.log("Current category: " + pages[n]);
  document.getElementById("frame").src =
    "https://en.m.wikipedia.org/wiki/Special:RandomInCategory/" + pages[n];
}

//Return array of user-interested categories
function getCategories() {
    return ["Beaches_of_Japan", "Pastries", "Tea", "Island_countries", "Gundam"];
}