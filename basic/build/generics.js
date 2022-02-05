"use strict";
// generics 泛型 => 執行 function 時才定義型別
function createArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
} // 這樣的寫法無法限制參數 value 的型別
createArray(3, "x"); // ['x', 'x', 'x']
function genericsCreateArray(length, value) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
} // T 表示使用時可以輸入任意型別
genericsCreateArray(3, "x"); // <string> 即 T 的值
// 多值泛型
function swap(params) {
    return [params[1], params[0]];
}
swap([7, "seven"]); // ['seven', 7]
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
} // 只允許這個函式傳入那些包含 length 屬性的變數
loggingIdentity({ name: "Jack", length: 4 });
// loggingIdentity({ name: "Jack" }); // 少了 length 屬性
