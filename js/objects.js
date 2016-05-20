'use strict';

function Dog (name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

var dog1 = new Dog("Spot", "labrador", "6");
var dog2 = new Dog("Skip", "spaniel", "4");

function Cat (name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

var cat1 = new Cat("Apple", "tabby", "6");
var cat2 = new Cat("Ginger", "siamese", "4");

function Ferret (name, age, foodRequirements) {
  this.name = name
  this.age = age
  this.foodRequirements = foodRequirements
}

var ferret1 = new Ferret("Fizz", "6", "few calories");
var ferret2 = new Ferret("Buzz", "5", "many calories");

function Bird (name, breed, age) {
  this.name = name
  this.breed = breed
}

var bird1 = new Bird("Polly", "parrot");
var bird2 = new Bird("Biscuit", "peacock");

function Fish (name, species, waterConditions) {
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}

var fish1 = new Fish("Dory", "clownfish", "salt");
var fish2 = new Fish("Other", "goldfish", "fresh");
