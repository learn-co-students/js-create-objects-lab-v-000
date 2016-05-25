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

var sparky = new Dog("sparky", "pomeranian", "2")
var clover = new Dog("clover", "yorkie", "1")

var kitty = new Cat("kitty", "Russian Blue", "2");
var chloe = new Cat("chloe", "Persian Cat", "1");

var skeeter = new Ferret("skeeter", "5", "raw meat");
var trixie = new Ferret("trixie", "4", "some food");

var chirpy = new Bird("chirpy", 'bird1', '2'); 
var polly = new Bird("polly", "bird2", '2'); 

var nemo = new Fish('nemo', 'goldfish', '1'); 
var fish2 = new Fish('fish2', 'breed2', '1');