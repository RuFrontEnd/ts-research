// 列舉 Enum 型別用於取值被限定在一定範圍內的場景
export {};
enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true

console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true

let friday: Days = Days.Fri;
console.log("friday", friday); // 5

enum Season {
  Winter = 4,
  Spring = 1,
  Summer,
  Fall,
}

console.log(Season["Winter"] === 4); // true
console.log(Season["Spring"] === 1); // true
console.log(Season["Summer"] === 2); // true 未被賦職者依順序遞增
console.log(Season["Fall"] === 3); // true 未被賦職者依順序遞增
