// tuples 元組 => 有序不可變陣列

import { type } from "os";

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40]; // 強制陣列照著字串, 布林, 數值的方式放入資料
const pepsiO: [string, boolean, number] = ["brown", true, 40]; // 第二種寫法
// pepsi[0] = 40; // err
// pepsi[2] = "brown"; // err

// tuple and object 比較
const carSpaces: [number, number] = [400, 3354];
const carStats = {
  horsepower: 400,
  weight: 3354,
};
