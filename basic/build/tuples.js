"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tuples 元組
// 元祖和陣列的不同 => 元祖的有序的, 陣列是無序的 / 元祖的格式固定, 陣列的格式不固定
const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
};
const pepsi = ["brown", true, 40]; // 強制陣列照著字串, 布林, 數值的方式放入資料
const pepsiO = ["brown", true, 40]; // 第二種寫法
// pepsi[0] = 40; // err => 第0項不可為非 string 型別
// pepsi[2] = "brown"; // err => 第2項不可為非 number 型別
// const coke: Drink = ["black"]; // err 初始化必須填滿所有項
// tuple and object 比較
const carSpaces = [400, 3354];
const carStats = {
    horsepower: 400,
    weight: 3354,
};
// 越界元素 => 新增越界的元素時，它的型別會被限制為元組中每個型別的聯合型別
let tom;
tom = ["Tom", 25];
tom.push("male");
console.log("tom", tom);
// tom.push(true);　// err => Boolean 不是 string 也不是 number
