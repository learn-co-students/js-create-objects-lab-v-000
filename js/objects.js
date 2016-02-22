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

var dog1 = new Dog("bob", "labrador", 19);
var dog2 = new Dog("george", "retriever", 7);

var cat1 = new Cat("george", "himalayan", 5);
var cat2 = new Cat("samantha", "himalayan", 8);

var ferret1 = new Ferret("bob", 8, "carrots");
var ferret2 = new Ferret("bob", 8, "carrots");

var bird1 = new Bird("bob", "finch");
var bird2 = new Bird("bob", "finch");

var fish1 = new Fish("bob", "trout", "salty");
var fish1 = new Fish("bob", "trout", "acidic");