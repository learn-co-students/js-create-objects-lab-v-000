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
  this.foodRequirements = foodRequirements;
  this.age = age;
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

var dog1 = new Dog('Lassie', 'Collie', 62);
var dog2 = new Dog('Buddy', 'Mutt', 10);

var cat1 = new Cat('Pussy', 'alley', 3);
var cat2 = new Cat('Willow', 'Siamese', 4);

var ferret1 = new Ferret('RikiTiki', 2, 'snake-meat');
var ferret2 = new Ferret('ew', 1, 'ferrets are gross');

var bird1 = new Bird('Sam', 'Toucan');
var bird2 = new Bird('Bob', 'Sparrow');

var fish1 = new Fish('Red', 'fish', 'salt');
var fish2 = new Fish('Blue', 'fish', 'fresh');


