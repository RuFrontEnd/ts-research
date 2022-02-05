"use strict";
let carMarkers = ["ford", "toyota", "chevy"]; // 陣列內全部都是字串
// carMarkers[1] = 100 // err
// carMarkers.push(100) // err
const carsByMake = [["f150"], ["corolla"], ["camaro"]]; // 陣列內全部都是陣列且值皆為字串
let objects = [
    {
        message: "Hello",
    },
    { message: "Hi" },
    { message: "GoodBye" },
];
let objects2 = [
    {
        message: "Hello",
    },
    { message: "Hi", revolt: true },
    { message: "GoodBye" },
];
let objects3 = [
    {
        message: "Hello",
    },
    { message: 100 },
    { message: "GoodBye" },
];
// type array advantages
// 1) Help with inference when extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();
// 2) Prevent incompatible values to the array
// carMarkers.push(100); // err
// 3) Help with array method
carMarkers.map((car) => {
    return car.toUpperCase();
});
// 4) Flexible types
const importantDates = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
// importantDates.push(100); //err
// 泛型 Generic
let fibonacci = [1, 1, 2, 3, 5];
// any type array
let list = ["anyString", 25, { website: "anotherString" }];
