'use strict';

function Dog(name, breed, age) {
	this.name = name;
	this.breed = breed;
	this.age = age;
}

function Cat(name, breed, age) {
	this.name = name;
	this.breed = breed;
	this.age = age;
}

function Ferret(name, age, foodRequirements) {
	this.name = name;
	this.age = age;
	this.foodRequirements = foodRequirements;
}

function Bird(name, breed) {
	this.name = name;
	this.breed = breed;
}

function Fish(name, species, waterConditions) {
	this.name = name;
	this.species = species;
	this.waterConditions = waterConditions;
}

var dog1 = new Dog("fido", "terrier", 12);
var dog2 = new Dog("biance", "poodle", 2);


var ferret1 = new Ferret("tim", 12, "raw meat");
