'use strict';

function Dog (name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

var snoopy = new Dog("Snoopy", "Beagle", "4 years");
var rintintin = new Dog("RinTinTin", "German Shepherd", "10 months")

function Cat (name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

var felix = new Cat("Felix", "Tabby", "4 months");
var simba = new Cat("Simba", "Tiger", "6 months");

function Ferret (name, age, foodRequirements) {
  this.name = name
  this.age = age
  this.foodRequirements = foodRequirements //update ReadMe
}

var slinky = new Ferret ("Slinky", "5 months", "Yummy Things");
var furry = new Ferret ("Furry", "7 months", "Sweet Things");

function Bird (name, breed) {
  this.name = name
  this.breed = breed
}

var sam = new Bird ("Sam", "Toucan");
var hedgwig = new Bird ("Hedgwig", "Owl");

function Fish (name, species, waterConditions) {
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}

var nemo = new Fish("Nemo", "Clown Fish", "Safe");
var jaws = new Fish("Jaws", "Great White Shark", "Tasty Human-filled");