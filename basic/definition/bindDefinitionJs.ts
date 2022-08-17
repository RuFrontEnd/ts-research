import { returnNum } from "./typeDefinition.js"; // <- no extension

// runtime implementation of `thing` is taken from ".js"
console.log(returnNum(42)); // 42

// type declaration of `thing` is taken from ".d.ts"
type TypeOfThing = typeof returnNum; // number

// returnNum("42"); // err 
// 結論: 將 js 檔透過 .d.ts 加入型別系統後, 也會在 .ts 檔內產生型別判斷
