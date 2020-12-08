
var user = {
    name: "John",
    age: 25,
    arr: [5, 'Name 2', 9, 11, 'Name 5']
};

var user2 = {
    name: "Garry",
    arr: ['Name 1', 4, 'Name 3', 5],
    age: 32    
};

var allArrays = [];
for (var key in user) {
    if (Array.isArray(user[key])) {
        allArrays = allArrays.concat(user[key]);
    }
}

for (var key in user2) {
    if (Array.isArray(user2[key])) {
        allArrays = allArrays.concat(user2[key]);
    }
}

var sum = 0;
for (var key in allArrays) {
    if (typeof allArrays[key] == 'number') {
        sum += allArrays[key];
    }
}

console.log(user);
console.log(user2);
console.log(allArrays);
console.log(sum);