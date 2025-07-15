"use strict";
function sumOfAges(users) {
    return users.reduce((sum, user) => sum + user.age, 0);
}
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 24 },
    { name: "Charlie", age: 28 }
];
const totalAge = sumOfAges(users);
console.log(`The total age of all users is: ${totalAge}`); // Expected output: The total age of all users is: 82
