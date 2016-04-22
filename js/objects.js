'use strict';

function Dog(name, breed, age){
  this.name = name
  this.breed = breed
  this.age = age
}

function Cat(name, breed, age){
  this.name = name
  this.breed = breed
  this.age = age
}

function Ferret(name, age, foodRequirements){
  this.name = name
  this.age = age
  this.foodRequirements = foodRequirements
}

function Bird(name, breed){
  this.name = name
  this.breed = breed
}

function Fish(name, species, waterConditions){
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}

var fido = new Dog("fido", "maltese", 5);
var snoopy = new Dog("snoopy", "beagle", 12);
var kitty = new Cat("kitty", "orange", 7);
var kat = new Cat("kat", "tabby", 6);
var skippy = new Ferret("skippy", 2, "lots");
var flippy = new Ferret("flippy", 4, "a little");
var bogie = new Bird("bogie", "cockatoo");
var sam = new Bird("sam", "toucan");
var flip = new Fish("flip", "goldfish", "clean");
var bart = new Fish("bart", "beta", "semi-clean");