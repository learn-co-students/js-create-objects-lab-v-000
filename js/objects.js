'use strict';

function Dog (name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

var toby = new Dog("Toby", "maltzu", 7)
var molly = new Dog("Molly", "maltipoo", 5)

function Cat (name, breed, age) {
  this.name = name
  this.breed = breed
  this.age = age
}

var jinni = new Cat("Jinni", "shorthair", 6)
var olli = new Cat("Olli", "shorthair", 6)

function Ferret (name, age, foodRequirement) {
  this.name = name
  this.age = age
  this.foodRequirement = foodRequirement
}

var furry = new Ferret("Furry", 2, "seeds")
var tom = new Ferret("Tom", 3, "trash")

function Bird (name, breed) {
  this.name = name
  this.breed = breed
}

var woodstock = new Bird("Woodstock", "unknown")
var raven = new Bird("Raven", "raven")

function Fish(name, species, waterConditions) {
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}

var freddy = new Fish("Freddy", "goldfish", "fresh water")
var thomas = new Fish("Thomas", "cod", "salt water")