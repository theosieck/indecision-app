'use strict';

// arguments object - no longer bound with arrow
// const add = function(a,b) {
//     console.log(arguments); // in es5, you could access extra passed in arguments
//     return a + b;
// };
var add = function add(a, b) {
    // with arrow funcs, you can't access extra passed in arguments
    return a + b;
};
console.log(add(55, 1));

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
var user = {
    name: 'Jorie',
    cities: ['Columbus', 'Yellow Springs', 'Hoboken'],
    // can't convert this to an arrow function bc will lose this functionality, but can clean up
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
