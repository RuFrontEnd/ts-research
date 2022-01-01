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
