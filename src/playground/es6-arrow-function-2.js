// arguments object - no longer bound with arrow
// const add = function(a,b) {
//     console.log(arguments); // in es5, you could access extra passed in arguments
//     return a + b;
// };
const add = (a,b) => {
    // with arrow funcs, you can't access extra passed in arguments
    return a + b;
};
console.log(add(55,1));

// this keyword - also no longer bound
// es5: you can use this
// const user = {
//     name: 'Jorie',
//     cities: ['Columbus','Yellow Springs','Hoboken'],
//     printPlacesLived: function () {
//         const that = this;   // workaround so it doesnt crash when referencing inside helper function
//         this.cities.forEach(function(city) {
//             console.log(that.name + ' has lived in ' + city);
//         });
//     }
// }
// user.printPlacesLived();

//es6: functions use the this value from their parent
const user = {
    name: 'Jorie',
    cities: ['Columbus','Yellow Springs','Hoboken'],
    // can't convert this to an arrow function bc will lose this functionality, but can clean up
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}
console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};
console.log(multiplier.multiply());