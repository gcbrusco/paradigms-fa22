const { arrayBuffer } = require("stream/consumers");

function findUserById(users, id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id)
            return users[i].name; // notice it returns the name property
    }
    return null; // notice it returns null if the element is not found 
}

function computeBMIs(users) {
    var bmiArray = [];
    for (let i = 0; i < users.length; i++) {
        let bmi = users[i].weight / (users[i].height * users[i].height);
        bmiArray.push(bmi);
    }
    return bmiArray;
}

function findUserById_dec(users, id) {
    return users.filter(v => v.id == id)[0].name;
}

function computeBMIs_dec(users) {
    return users.map(v => v.weight / (v.height * v.height));
}

var users = [
    { id: 1, name: "Marta", height: 1.74, weight: 59 },
    { id: 2, name: "Josh", height: 1.80, weight: 88 },
    { id: 3, name: "Achilles", height: 1.68, weight: 63 },
    { id: 4, name: "Julius", height: 1.93, weight: 97 },
];
console.log(findUserById(users, 1));
console.log(findUserById_dec(users, 1));
console.log(computeBMIs(users));
console.log(computeBMIs_dec(users));