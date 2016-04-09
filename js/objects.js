'use strict';

function Dog (name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}

function Cat (name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}

function Ferret (name, age, foodRequirements) {
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements;
}

function Bird (name, breed) {
  this.name = name;
  this.breed = breed;
}

function Fish (name, species, waterConditions) {
  this.name = name;
  this.waterConditions = waterConditions;
  this.species = species;
}

var fred = new Dog("fred", "golden", 10);
var scruffy = new Dog("scruffy", "lab", 5);

var garfield = new Cat("garfield", "calico", 5);
var pet = new Cat("pet", "nude", 1);

var brad = new Ferret("bard", 100, "none");
var ferrous = new Ferret("ferrous", 20, "1000 salmon packets");

var birdy = new Bird("polly", "none");
var birdo = new Bird("parsnip", "toucan");

var fisho = new Fish("fisho", "shark", "salt");
var fishy = new Fish("fishy", "salmon", "fresh");



