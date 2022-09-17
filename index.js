const obj = new Object();
obj.name = 'sameer';
obj.location = 'kslayout';
obj.area = '560078';

console.log(obj);

//2nd method

function human(hands, legs) {
  this.hands = hands;
  this.legs = legs;
}
const animal = new human(2, 2);
console.log(animal);


const animal2 = {
  name = "dog",
  breeed = "germanshephard",
  age = "seven months",
}
animal2.location = "alsaka";
animal2.family = "husky";
console.log(animal2);

const grandparent = {
  name : "sameer",
  location: "ks layout",
  pin: "560078",
}
const parent = Object.create(grandparent);
  parent.name = "pbodra";
  parent.location="ranchi";
  parent.pin="835216";

  const father = Object.create(parent);
  parent.name = "mra";
  parent.location="nagpur";
  parent.pin="8788464";

  console.log(father);


//// form console copied........


  const obj = new Object();
  obj.name = "sameer";
  obj.location ="kslayout";
  obj.area="560078";

  console.log(obj);
VM202:6 {name: 'sameer', location: 'kslayout', area: '560078'}
undefined
function human(hands, legs) {
  this.hands = hands;
  this.legs = legs;
}
const animal = new human(2, 2);
console.log(animal);

VM206:6 human {hands: 2, legs: 2}
undefined
const animal2 = {
  name = "dog",
  breeed = "germanshephard",
  age = "seven months",
}
animal2.location = "alsaka";
animal2.family = "husky";
console.log(animal2);
VM210:2 Uncaught SyntaxError: Invalid shorthand property initializer
const animal2 = {
  name : "dog",
  breeed : "germanshephard",
  age : "seven months",
}
animal2.location = "alsaka";
animal2.family = "husky";
console.log(animal2);
VM239:8 {name: 'dog', breeed: 'germanshephard', age: 'seven months', location: 'alsaka', family: 'husky'}
undefined
const grandparent = {
  name : "sameer",
  location: "ks layout",
  pin: "560078",
}
const parent = Object.create(grandparent);
  parent.name = "pbodra";
  parent.location="ranchi";
  parent.pin="835216";

  console.log(parent);
VM255:11 {name: 'pbodra', location: 'ranchi', pin: '835216'}location: "ranchi"name: "pbodra"pin: "835216"[[Prototype]]: Object
undefined
console.log(parent.__proto__.name);
VM440:1 sameer
undefined
const grandparent = {
  name : "sameer",
  location: "ks layout",
  pin: "560078",
}
const parent = Object.create(grandparent);
  parent.name = "pbodra";
  parent.location="ranchi";
  parent.pin="835216";

  const father = Object.create(parent);
  parent.name = "mra";
  parent.location="nagpur";
  parent.pin="8788464";

  console.log(father);
VM444:16 {}[[Prototype]]: Objectlocation: "nagpur"name: "mra"pin: "8788464"[[Prototype]]: Object
undefined
console.log(father.__proto__.__proto__.name);
VM622:1 sameer
undefined
console.log(father.__proto__.name);
VM733:1 mra
undefined