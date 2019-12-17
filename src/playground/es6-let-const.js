var nameVar = 'Jorie';
var nameVar = 'Mike'
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';  // can reassign but not redefine lets
console.log('nameLet', nameLet);

const nameConst = 'Frank';  // cannot reassign const
console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';    // vars are function scoped
    return petName;
}
// let and const are also function scoped

// block scoping
// var fullName = 'Jorie Sieck';
// if(fullName) {
//     var firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }
// console.log(firstName);
const fullName = 'Jorie Sieck';
if(fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
// const and let are block scoped - don't work outside of if statements etc
// if you define it outside the block you can use it in and out of it