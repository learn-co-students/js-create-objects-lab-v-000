'use strict';

function Dog (name, breed, age_string) {
  this.name = name
  this.breed = breed
  this.age = age_string
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

function Fish (name, species, waterConditions) {
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}