// primitive types
// number
let apples: number = 5; // type annotations
// apples = 'abc' // err
let bananas = 10; // type inference 不宣告型別, ts 仍舊會認定該變數的型別
// bananas = 'test'; // err

// string
let speed: string = "fast";
// speed = 10 // err

// boolean
let hasName: boolean = true;

export {}
// null
let nothingMuch: null = null;

// undefined
let nothing: undefined = undefined;

// object types
// built in object
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];
// colors = [1, 2, 3] // err
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
// point = {
//   x: "x",
//   y: "y",
// }; // err

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log("i", i);
};
logNumber(1);
// logNumber('test') // err

// type annotations => 清楚定義變數型別
// type inference (型別推論) => 讓 ts 判斷可能的型別( 無法判斷時為 any )
// when to use annotations
// 1) function that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // JSON.parse 回傳 any type
console.log("coordinates.abc", coordinates.abc); // 這時我們預期報 err 但卻沒有
const tsCoordinates: { x: number; y: number } = JSON.parse(json); // JSON.parse 回傳 any type
// console.log("tsCoordinates.abc", tsCoordinates.abc); // err

// 2) when we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
let foundWord; // expected to be truthy but ts give us a hint as "any" type
foundWord = words.includes("green");
let tsFoundWord: boolean;
tsFoundWord = words.includes("green");

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbers.map((number, index) => {
  number > 0 && (numberAboveZero = numbers[index]);
});
