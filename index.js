'use strict';

function Dog(name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
}

function Cat(name, breed, age) {
  this.breed = breed;
  this.name = name;
  this.age = age;
}

function Ferret(name, age, foodRequirements) {
  this.foodRequirements = foodRequirements;
  this.name = name;
  this.age = age;
}

function Bird(name, breed) {
  this.breed = breed;
  this.name = name;
}

function Fish(name, species, waterConditions) {
  this.waterConditions = waterConditions;
  this.name = name;
  this.species = species;
}