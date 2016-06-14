'use strict';

function Dog (name, breed, age){
	this.name = name
	this.breed = breed
	this.age = age
}

function Cat (name, breed, age){
	this.name = name
	this.breed = breed
	this.age = age
}

function Ferret (name, age, foodRequirements){
	this.name = name
	this.age = age
	this.foodRequirements = foodRequirements
}

function Bird (name, breed){
	this.name = name
	this.breed = breed
}

function Fish (name, species, waterConditions){
	this.name = name
	this.species = species
	this.waterConditions = waterConditions
}

var fido = new Dog('fido', 'dog', 12)
var fido2 = new Dog('fido', 'dog', 12)

var jimbo = new Cat('jimbo', 'grey', 1)
var pbody = new Cat('pbody', 'grey', 1)

var fer = new Ferret('fer', 'gross', '2 cups')
var fer2 = new Ferret('fer2', 'gross', '2 cups')

var birdy = new Bird('parrot', 'pirate')
var birdz = new Bird('zparrot', 'pirate')

var shark = new Fish('fin', 'reef', 'salty')
var nemo = new Fish('nemo', 'clown', 'salty')