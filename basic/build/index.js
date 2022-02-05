"use strict";
// 全域安裝 typescript => yarn add typescript -g
// 全域安裝 ts-node => yarn add ts-node -g
// 測試環境安裝 ts node type definitions => yarn add @types/node -save-dev
// tsc [file_name].ts => 將 .ts 檔編譯為 .js
// ts-node => 同時執行 tsc [file_name].ts 與 node [file_name].ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then((res) => {
    const todo = res.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
});
const logTodo = (id, title, completed) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
// why do wo care about types?
// 1. types are used by the Typescript Compiler to analyze our code for errors
// 2. types allow other engineers to understand what values are flowing around out codebase
