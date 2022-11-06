// // 1. function JS
// function log(log){
//     console.log(log);
// }

// log("Hello World");

// // 2. Arrow function
// const logger = (log) => console.log(log);
// logger("Hello World");

// const sum = (a, b) => a + b;
// console.log(sum(2, 4));

// // return object
// const object = (a, b) => ({a: a, b: b});
// console.log(object(3, 5));

// // sử dụng data làm key cho object
// var name = "Name";
// var age = "AGE";
// const user = {
//     [name] : "Đương Đình Nguyễn",
//     [age] : 22
// };
// console.log(user);

// 7. Thực hành sử dụng Enhanced object literals
// Chuyển array thành object với reduce
// Add key, value vào object với Object.assign
// Sử dụng arrow function
const obj = [
    ["name", "Đương Đình Nguyễn"],
    ["age", 22],
    ["country", "Nam Định"]
];

const customData = (result, current) => Object.assign(result, {[current[0]] : current[1]});
console.log(obj.reduce(customData, {}));