//import './utils.js';
import {square, add} from './utils.js';
import{isAdult, canDrink} from './person.js';

console.log('app.js is running');
console.log(square(4));
console.log(add(1,2));

console.log(isAdult(2));
console.log(isAdult(23));
console.log(isAdult(18));
console.log(canDrink(2));
console.log(canDrink(23));
console.log(canDrink(21));