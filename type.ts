export {}; // 讓 ts 視每個 .ts 檔案都為一個 block scope 

const today = new Date();
today.getMonth();
// today.abc; // 這邊會提示 abc 不包含在 Date 物件內

const person = {
  age: 20,
};
// person.abc // err

class Color {}
const red = new Color();
// red.abc // err
