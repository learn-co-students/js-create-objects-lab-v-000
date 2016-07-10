'use strict';

function Dog (name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}
var poodle = new Dog("Billy Jean", "poodle", "2 years");
var terrier = new Dog("Marie Jean", "terrier", "3 years");

function Cat(name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}
var tiger = new Cat("Gatsby", "african tiger", "5 years");
var lion = new Cat("Mufasa", "African lion", "8 years");

function Ferret(name, age, foodRequirements){
  this.name = name;
  this.age = age;
  this.foodRequirements = foodRequirements;
}
var albino = new Ferret("Billy Ocean", "10 years", "chicken");
var blackFoot = new Ferret("Killer Croc", "4 years", "beef");

function Bird (name, breed){
  this.name = name;
  this.breed = breed;
}
var dove = new Bird("Eric Williams", "oriental roller");
var pigeon = new Bird("Andy Warhol", "rock dove");

function Fish (name, species, waterConditions){
  this.name = name;
  this.breed = species;
  this.waterConditions = waterConditions;
}
var shark = new Fish("moby dick", "great white", "warm waters");
var sharkfin = new Fish("billy dick", "hammer head", "cold waters");
