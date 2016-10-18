'use strict';

function Dog(name, breed, age) {
	this.name = name;
	this.breed = breed;
	this.age = age;
};

function Cat(name, breed, age) {
	this.name = name;
	this.breed = breed;
	this.age = age;
};

function Ferret(name, age, foodRequirements) {
	this.name = name;
	this.age = age;
	this.foodRequirements = foodRequirements;
};

function Bird(name, breed) {
	this.name = name;
	this.breed = breed;
};

function Fish(name, species, waterConditions) {
	this.name = name;
	this.species = species;
	this.waterConditions = waterConditions;
};


// Dog with name, breed, and age properties
// Cat with name, breed, and age properties
// Ferret with name, age, and foodRequirements properties
// Bird with name and breed properties
// Fish with name, species, and waterConditions properties