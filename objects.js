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

var fred = new Ferret("Fred", "2 years old", "yes");
var spike = new Dog("Spike", "Cocker Spaniel", "3 years old");


