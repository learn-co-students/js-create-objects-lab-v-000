'use strict';

function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}

function Cat(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}

function Ferret(name, age, foodRequirements) {
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements;
}

function Bird(name, breed) {
  this.name = name;
  this.breed = breed;
}

function Fish(name, species, waterConditions) {
  this.name = name;
  this.species = species;
  this.waterConditions = waterConditions;
}

dog1 = new Dog("name1","breed1","age1");
dog2 = new Dog("name2","breed2","age2");
cat1 = new Cat("name1","breed1","age1");
cat2 = new Cat("name2","breed2","age2");
ferret1 = new Ferret("name1","breed1","foodRequirements1");
ferret2 = new Ferret("name2","breed2","foodRequirements2");
bird1 = new Bird("name1","breed1");
bird2 = new Bird("name2","breed2");
fish1 = new Fish("name1","breed1","waterConditions1");
fish2 = new Fish("name2","breed2","waterConditions2");
