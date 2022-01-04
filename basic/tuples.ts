export {};
// tuples 元組

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40]; // 強制陣列照著字串, 布林, 數值的方式放入資料
const pepsiO: [string, boolean, number] = ["brown", true, 40]; // 第二種寫法
// pepsi[0] = 40; // err => 第0項不可為非 string 型別
// pepsi[2] = "brown"; // err => 第2項不可為非 number 型別
// const coke: Drink = ["black"]; // err 初始化必須填滿所有項

// tuple and object 比較
const carSpaces: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
};

// 越界元素 => 新增越界的元素時，它的型別會被限制為元組中每個型別的聯合型別
let tom: [string, number];
tom = ["Tom", 25];
tom.push("male");
console.log("tom", tom);
// tom.push(true);　// err => Boolean 不是 string 也不是 number
