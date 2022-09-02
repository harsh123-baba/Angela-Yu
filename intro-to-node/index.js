//jshint esversion:6

// console.log("Hi, how can you create package,json file using cmd there are no need to create a react app.")

var superheroes = require("superheroes");
var mySuperHeroName = superheroes.random();
console.log(mySuperHeroName);

var supervillains = require("supervillains");
var superVillains = supervillains.random();
console.log(superVillains);

