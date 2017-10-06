/* 
Create a constructor function for each of the following:
1. Dog with name, breed, and age properties
2. Cat with name, breed, and age properties
3. Ferret with name, age, and foodRequirements properties
4. Bird with name and breed properties
5. Fish with name, species, and waterConditions properties
*/
function Dog(name, breed, age){
  this.name = name
  this.breed = breed
  this.age = age
}

function Cat(name, breed, age){
  this.name = name
  this.breed = breed
  this.age = age
}

function Ferret(name, age, foodRequirements){
  this.name = name
  this.age = age
  this.foodRequirements = foodRequirements
}

function Bird(name, breed){
  this.name = name
  this.breed = breed
}

function Fish(name, species, waterConditions){
  this.name = name
  this.species = species
  this.waterConditions = waterConditions
}
