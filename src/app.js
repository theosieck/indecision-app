//import './utils.js';
import subtract, {square, add} from './utils.js'; // {} are named, un{} is the default
import isSenior, {isAdult, canDrink} from './person.js';

console.log('app.js is running');
console.log(square(4));
console.log(add(1,2));
console.log(subtract(100,81));

console.log(isAdult(2));
console.log(isAdult(23));
console.log(isAdult(18));
console.log(canDrink(2));
console.log(canDrink(23));
console.log(canDrink(21));
console.log(isSenior(2));
console.log(isSenior(67));
console.log(isSenior(65));