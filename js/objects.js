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

var dogJoey = new Dog("Joey", "mut", "1 year");
var dogTom = new Dog("Tom", "mut", "2 years");

var catJoey = new Cat("Jerry", "calico", "5 years");
var catTom = new Cat("Lisa", "persian", "3 months");

var ferretJoey = new Ferret("Jane", "1 year", "pizza");
var ferretTom = new Ferret("Sarah", "9 years", "cheese");

var birdJoey = new Bird("Thomas", "mix");
var birdTom = new Bird("Anthony", "mix");

var fishJoey = new Fish("Liam", "unknown", "1 year");
var fishTom = new Fish("Josey", "gold", "2 years");
