'use strict';
function Dog (name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age
}

function Cat (name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

function Ferret (name, age, foodRequirement) {
  this.name = name
  this.age = age
  this.foodRequirements = foodRequirement
}

function Bird (name, breed) {
  this.name = name
  this.breed = breed
}

function Fish (name, species, waterConditions) {
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}


var dog1 = new Dog ("Tyler", "Mutt", 26)
var dog2 = new Dog ("Tyler2", "Mutt", 27)

var cat1 = new Cat ("tylerCat", "stray", 26)
var cat2 = new Cat ("tylerCat", "stray", 27)

var ferrt1 = new Ferret ("TyFer", 26, ["meat", "water"])
var ferrt2 = new Ferret ("TyFer", 27, ["meat", "water"])
