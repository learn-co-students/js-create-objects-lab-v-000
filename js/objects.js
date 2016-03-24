'use strict';

function Dog (name, breed, age){
  this.name = name
  this.breed = breed
  this.age = age
}

function Cat (name, breed, age){
  this.name = name
  this.breed = breed
  this.age = age
}

function Ferret (name, age, foodRequirements){
  this.name = name
  this.age = age
  this.foodRequirements = foodRequirements
}

function Bird (name, breed){
  this.name = name
  this.breed = breed
}

function Fish (name, species, waterConditions) {
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}

var Woofy = new Dog("Woofy", "Mutt", 1);
var Meowth = new Cat("Meowth", "Pokemon", 3);
var Furby = new Ferret("Furby", 1, "Chocolate");
var Huey = new Bird("Huey", "parakeet");
var Boo = new Fish ("Boo", "catfish", "salty");