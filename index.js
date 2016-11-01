'use strict';

function Dog(name, breed, age) {
  this.name = name,
  this.breed = breed,
  this.age = age
};

function Cat(name, breed, age) {
  this.name = name,
  this.breed = breed,
  this.age = age
};

function Ferret(name, age, foodRequirements) {
  this.name = name,
  this.age = age,
  this.foodRequirements = foodRequirements
};

function Bird(name, breed) {
  this.name = name,
  this.breed = breed
};

function Fish(name, species, waterConditions) {
  this.name = name,
  this.species = species,
  this.waterConditions = waterConditions
};

var dog = new Dog("happy", "ol", 3);
var cat = new Cat("happy", "ol", 3);
var ferret = new Ferret("happy", "ol", "raw meat");
var bird = new Bird("happy", "ol", 3);
var fish = new Fish("Pinocchio", "ol", "warm");
