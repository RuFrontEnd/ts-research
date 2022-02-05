"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const today = new Date();
today.getMonth();
// today.abc; // err 這邊會提示 abc 不包含在 Date 物件內
const person = {
    age: 20,
};
// person.abc // err
class Color {
}
const red = new Color();
let str = "123"; // 限制為 Name 型別
let number = 123; // string 或 number 皆可
function handleEvent(event) {
    // do something
}
handleEvent("click");
handleEvent("scroll");
handleEvent("mousemove");
// handleEvent("XXX"); // err => 字串不屬於 click / scroll / mousemove;
