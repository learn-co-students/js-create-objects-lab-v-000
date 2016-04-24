'use strict';

function Dog (name, breed, age){
  this.name = name
  this.breed = breed
  this.age = age
}

var fido = new Dog("fido", 'mut', '5');
var odie = new Dog("odie", "beagle", '4');

function Cat (name, breed, age){
  this.name = name
  this.breed = breed
  this.age = age
}

var garfield = new Cat("Garfiled", "tabby", '3');
var milo = new Cat("Milo", "Persian", "2");

function Ferret (name, age, foodRequirements){
  this.name = name
  this.age = age
  this.foodRequirements = foodRequirements
}

var tom = new Ferret("Tom", "1", "animal crackers");
var glarby = new Ferret("Glarby", "3", "iron shavings" );

function Bird (name, breed){
  this.name = name
  this.breed = breed
}

var polly = new Bird("Polly", "parrot");
var lucy = new Bird("Lucy", "macaw");

function Fish (name, species, waterConditions) {
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}

var sirSwimsALot = new Fish("Sir Swims A Lot", "goldfish");
var puffy = new Fish("Puffy", "pufferfish");