'use strict';

function Dog (name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

function Cat (name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

function Ferret (name, age, food) {
  this.name = name
  this.age = age
  this.foodRequirements = food
}

function Bird (name, breed) {
  this.name = name
  this.breed = breed
}

function Fish (name, species, water) {
  this.name = name
  this.species= species
  this.waterConditions = water
}

//Fish Name, species, and water conditions properties
//Create two objects using each constructor function.
//Make sure you run the tests to make sure your solutions work as expected.