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

function Ferret(name, age, foodRequirement) {
  this.name = name
  this.age = age
  this.foodRequirement = foodRequirement
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

var dog1 = new Dog('barkface', 'terrier', 1)
var dog2 = new Dog('doggle', 'plop hound', 7)

var cat1 = new Cat('fluffy', 'mix', 1)
var cat2 = new Cat('unfluffly', 'siamese', 2)

var ferret1 = new Ferret('bitey', 1, 'some')
var ferret2 = new Ferret('weasel', 2, 'some more')

var bird1 = new Bird('chirpy', 40)
var bird2 = new Bird('old chirpy', 60)

var fish1 = new Fish('fishface', 'goldfish', 'fresh')
var fish2 = new Fish('sammich', 'tuna', 'salt')