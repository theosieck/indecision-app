// es5 function - can be named
function square(x) {
    return x * x;
};
console.log(square(9));

// es6 arrow function - anonymous, have to be assigned to a variable
// const squareArrow = (x) => {
//     return x * x;
// };
// new, concise syntax:
const squareArrow = (x) => x*x; // this is like the python thing
console.log(squareArrow(4));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Jorie Sieck'));