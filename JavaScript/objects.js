// PART1: Objects are unordered collections
// Creating objects
let user1 = new Object();     // "object constructor" syntax
let user2 = {};             // "object literal" syntax
let user3 = {name: "Mark", birth_year: 2002}; // initializing it with values

// accessing properties (object's state)
console.log(user3.name);
console.log(user3.age);

// what happens on the code below?
console.log(user2.name);

user2.name = "Ada"; // we can add properties dynamically
// how about now?
console.log(user2.name);




// adding a method to an object
let user4 = {
    name: "Amy Lee",
    birth_year: 1981,
    // this is a method that can be invoked
    age: function () { /* Alternative syntax: age(): { ... } */
         return new Date().getFullYear() - this.birth_year;
    }
}
console.log(user4.age()); // 41


// PART2: Prototype-based OOP
let user5 = {
    name: "Jacoby Shaddix",
    birth_year: 1976,
    age: function () { 
         return new Date().getFullYear() - this.birth_year;
    }
}
console.log(user5.name); // Jacoby Shaddix
let user6 = Object.create(user5);

console.log(user6.name); // Jacoby Shaddix
user6.birth_month = "October";
console.log(user6.year); // 1976
console.log(user6.birth_month); // 1976


let user7 = Object.create(user5);
user7.name = "Avril Lavigne"
console.log(user7.name); // Avril Lavigne
console.log(user7.birth_month); // 1999



