"use strict";
// JS 的內建物件也可以在 ts 中直接當作型別
// 常見的內建物件 => Boolean、Error、Date、RegExp 等
let boolean = new Boolean(1);
let err = new Error("Error occurred");
let date = new Date();
let regexp = /[a-z]/;
let body = document.body;
let allDiv = document.querySelectorAll("div");
