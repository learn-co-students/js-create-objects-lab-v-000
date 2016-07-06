'use strict';

// function Sandwich(bread, crust, meat, condiments, veggies, cheese) {
//   this.breadType = bread;
//   this.crust = crust;
//   this.meat = meat;
//   this.condiments = condiments;
//   this.veggies = veggies;
//   this.cheese = cheese;
// }
// var blt = new Sandwich("white", false, "bacon", "mayo", ["lettuce", "tomato"], "none");

function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}
function Cat(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}
function Ferret(name, age, foodRequirements) {
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements;
}
function Bird(name, breed) {
  this.name = name;
  this.breed = breed;
}
function Fish(name, species, waterConditions) {
  this.name = name;
  this.species = species;
  this.waterConditions = waterConditions;
}
var fido = new Dog("Fido", "Hungarian Pumi", 1);
var spot = new Dog("Spot", "Beagle", 2);
var felix = new Cat("Felix", "American Longhair", 2);
var mittens = new Cat("Mittens", "American Shorthair", 3);
var tripHazard = new Ferret("Trip Hazard", 4, "Purina FerretChow");
var skippy = new Ferret("Skippy", 1.5, "Purina FerretChow");
var tweety = new Bird("Tweety", "Canary");
var tucanSam = new Bird("Tucan Sam", "Tucan");
var fins = new Fish("Fins", "Finnish Fish", "Brackish water.");
var bubbles = new Fish("Bubbles", "Goldfish", "Fresh water.");
