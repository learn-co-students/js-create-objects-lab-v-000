'use strict';

function Dog(name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

function Cat(name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}


function Ferret(name, age, foodRequirements) {
  this.name = name
  this.age = age
  this.foodRequirements = foodRequirements
}

function Bird(name, breed) {
  this.name = name
  this.breed = breed
}

function Fish(name, species, waterConditions) {
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}

var Fido = new Dog("Fido","Mutt",15);
var Chelsea = new Dog("Chelsea","Cav","dead");
var Mittens = new Cat("Mittens","Calico",1);
var Romney = new Cat("Romney",'Presidential',15);
var Rascal = new Ferret("Rascal",12,"Muffins");
var Scooter = new Ferret("Scooter",5,"Pancakes");
var Peeky = new Bird("Peeky","Parrot");
var Dumbo = new Bird("Dumbo","Pigeon");
var Flaky = new Fish("Flaky","Goldfish","Alkaline");
var Beta = new Fish("Beta","Beta","Salty");