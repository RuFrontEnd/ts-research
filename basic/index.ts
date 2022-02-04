// 全域安裝 typescript => yarn add typescript -g
// 全域安裝 ts-node => yarn add ts-node -g
// 測試環境安裝 ts node type definitions => yarn add @types/node -save-dev
// tsc [file_name].ts => 將 .ts 檔編譯為 .js
// ts-node => 同時執行 tsc [file_name].ts 與 node [file_name].ts

import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
} // interface 介面 => 定義物件型別

axios.get(url).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};

// why do wo care about types?
// 1. types are used by the Typescript Compiler to analyze our code for errors
// 2. types allow other engineers to understand what values are flowing around out codebase
