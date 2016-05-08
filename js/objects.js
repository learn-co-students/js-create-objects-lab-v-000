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
function Ferret(name, age, foodRequirement){
  this.name = name;
  this.age = age;
  this.foodRequirement = foodRequirement;
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

var fido = new Dog('fido', 'beagle', 5);
var sampson = new Dog('sampson', 'schnoodle', 8);
var gunner = new Cat('gunner', 'siamese', 6);
var gizmo = new Cat('gizmo', 'yellotail', 5);
var amy = new Ferret('amy', '2 years', 'bagels');
var jack = new Ferret('jack', '3 years', 'juice');
var cernan = new Bird('cernan', 'eagle');
var sean = new Bird('sean', 'sparrow');
var nemo = new Fish('nemo', 'clownfish', 'freshwater');
var dory = new Fish('dory', 'flounder', 'freshwater');
