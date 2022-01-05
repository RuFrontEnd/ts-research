// JS 的內建物件也可以在 ts 中直接當作型別
// 常見的內建物件 => Boolean、Error、Date、RegExp 等

let boolean: Boolean = new Boolean(1);
let err: Error = new Error("Error occurred");
let date: Date = new Date();
let regexp: RegExp = /[a-z]/;
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll("div");
