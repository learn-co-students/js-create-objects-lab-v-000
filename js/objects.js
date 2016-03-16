'use strict';

function Dog(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}

function Cat(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}

function Ferret(name, age, foodRequirements){
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements;
}

function Bird(name, breed){
  this.name = name;
  this.breed = breed;
}

function Fish(name, species, waterConditions){
  this.name = name;
  this.species = species;
  this.waterConditions = waterConditions;
}

var fido = new Dog('Fido', 'Pitbull', 6);
var skip = new Dog('Skip', 'German Shephard', 3);

var ketz = new Cat('Ketz', 'Persian', 2);
var garfield = new Cat('Garfield', 'Persian', 3);

var ferr = new Ferret('Ferr', 3, 'meat');
var dunn = new Ferret('Dunn', 5, 'meat');

var tzip = new Bird('Tzip', 'Parrot');
var jup = new Bird('Jup', 'Parrot');

var fishel = new Fish('Fishel', 'Gefilte', 'warm');
var gFish = new Fish('G-Fish', 'Gefilte', 'warm');