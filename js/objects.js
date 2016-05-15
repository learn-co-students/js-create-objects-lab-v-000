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

var lady = new Dog("Lady", "Lab", 3);
var annie = new Dog("Annie", "Hound", 6);
var tuvok = new Cat("Tuvok", "house cat", 7);
var kittyPerry = new Cat("Kitty Perry", "house cat", 6);
var ferret = new Ferret("Ferret", 3, "cobras");
var petFerret = new Ferret("Pet Ferret", 5, "cobras");
var tucanSam = new Bird("Tucan Sam", "tucan");
var polly = new Bird("Polly", "bird");
var nemo = new Fish("Nemo", "Clown fish", "warm");
var goldFish = new Fish("Gold Fish", "gold fish", "warm");
