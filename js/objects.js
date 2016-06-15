'use strict';

var Dog = function (name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
};

var Cat = function (name, breed, age) {
  this.name = name;
  this.breed = breed;
  this.age = age;
};

var Ferret = function (name, age, foodReq) {
  this.name = name;
  this.age = age;
  this.foodRequirements = foodReq;
};

var Bird = function (name, breed) {
  this.name = name;
  this.breed = breed;
};

var Fish = function (name, species, waterCond) {
  this.name = name;
  this.species = species;
  this.waterConditions = waterCond;
};
