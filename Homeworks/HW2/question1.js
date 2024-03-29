const { arrayBuffer } = require("stream/consumers");

function findUserById(users, id) {
    return users.filter(v => v.id == id)[0].name;
}

function computeBMIs(users) {
    return users.map(v => v.weight / (v.height * v.height));
}

var users = [
    { id: 1, name: "Marta", height: 1.74, weight: 59 },
    { id: 2, name: "Josh", height: 1.80, weight: 88 },
    { id: 3, name: "Achilles", height: 1.68, weight: 63 },
    { id: 4, name: "Julius", height: 1.93, weight: 97 },
];