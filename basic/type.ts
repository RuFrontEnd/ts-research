// 型別別名 Type Alias
export {}; // tsconfig.ts =>  "module": "commonjs",

const today = new Date();
today.getMonth();
// today.abc; // err 這邊會提示 abc 不包含在 Date 物件內

const person = {
  age: 20,
};
// person.abc // err

class Color {}
const red = new Color();
// red.abc // err

// 型別別名
type Name = string | number;
let str: Name = "123"; // 限制為 Name 型別
let number: Name = 123; // string 或 number 皆可
// let trueOrFalse: Name = false; // err => false 不是 string 或 number

// 字串字面量型別
type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(event: EventNames) {
  // do something
}
handleEvent("click");
handleEvent("scroll");
handleEvent("mousemove");
// handleEvent("XXX"); // err => 字串不屬於 click / scroll / mousemove;
