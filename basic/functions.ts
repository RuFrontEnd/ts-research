// 函式宣告式 function declaration
function sum(x: number, y: number): number {
  return x + y;
} // (x: number, y: number) => 定義輸入值型別 / : number 定義輸出值型別
sum(1, 2);
// sum(1, '2'); // err => y參數型別不正確

// 函式表達式 function expression
let getTotal = function (x: number, y: number): number {
  return x + y;
}; // 這樣的寫法會有個問題 => 只定義了右側匿名函式的型別 / 但左側變數型別是由型別推論出來的

let getReviseTotal: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
}; // 改善寫法 => (x: number, y: number) => number 定義變數輸入輸出值

const add = (a: number, b: number): number => {
  // return 'strstrstr'; // err
  return a + b;
}; // (a: number, b: number) 定義參數型別 / 最後一個 number 定義回傳值型別
// add("123", "456"); // err
add(123, 456);

const subtract = (a: number, b: number): number => {
  //   a - b; // err
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
}; // 匿名函式寫法

const logger = (message: string): void => {
  console.log(message);
  return null || undefined;
  //   return null || undefined || "123"; // err
  //   throw new Error(message); // worked
}; // void 表示不回傳任何值 || 回傳 null || 回傳 undefined || 拋出錯誤

const throwError = (message: string): never => {
  throw new Error(message);
  //   return null || undefined; // err
}; // void 表示不回傳任何值(連 null 與 undefined 都不行) || 拋出錯誤

const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log("forecast.date", forecast.date);
  console.log("forecast.weather", forecast.weather);
};

logWeather(todaysWeather);

const destructiveLogWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log("date", date);
  console.log("weather", weather);
}; // 參數解構賦值

destructiveLogWeather(todaysWeather);

// 使用 interface 定義函式型別
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};

// 可選參數
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName;
  }
}
let tomcat = buildName("Tom", "Cat");
let tom = buildName("Tom");

// 可選參數一定要在必選參數後面 => 可選參數後面不允許再出現必需參數
// function errBuildName(lastName?: string, firstName: string): string {
//   if (lastName) {
//     return firstName + " " + lastName;
//   } else {
//     return firstName;
//   }
// } // err => 可選參數一定要在必選參數前面


