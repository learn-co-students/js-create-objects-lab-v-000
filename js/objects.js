'use strict';

function Dog (name, breed, age){
  this.name = name
  this.breed = breed
  this.age =age
}

function Cat (name, breed, age){
  this.name = name
  this.breed = breed
  this.age =age
}

function Ferret (name, age, food){
  this.name = name
  this.age = age
  this.foodRequirements = food
}


function Bird (name, breed){
  this.name = name
  this.breed = breed
}

function Fish (name, species, waterConditions){
  this.name = name
  this.species = species
  this.waterConditions =waterConditions
}

var chow = new Dog("chow","chow",2)
var chew = new Dog("chow","chow",2)
var cats1 = new Cat("chow","chow",2)
var cats2 = new Cat("chow","chow",2)
var f1 = new Ferret("chow","chow","test")
var f2 = new Ferret("chow","chow","test")
var fish1 = new Fish("chow","chow",2)
var fish2 = new Fish("chow","chow",2)
var b1 = new Bird("chow","chow")
var b2 = new Bird("chow","chow")
