"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type assertion => 型別斷言
// <型別>值
// 值 as 型別 => tsx 必須用這個
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
} // 條件式中只有當 something 為 string 時才可以使用 .length 屬性, 但因為 something 也有可能是 number, 所以就要使用型別斷言的方式更具體的說明該變數是什麼型別
getLength(18);
// or
function asGetLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
