// 合併 => 相同的函式 / 類別 / 介面名稱, 會合併為一個型別定義
function reverse(x: number): number;
function reverse(x: string): string;
// 相當於
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(x.toString().split("").reverse().join(""));
  } else if (typeof x === "string") {
    return x.split("").reverse().join("");
  }
}

interface Alarm {
  price: number;
}
interface Alarm {
  weight: number;
}
// 相當於
interface Alarm {
  price: number;
  weight: number;
}

interface AlarmDifferentType {
  price: number;
}
interface AlarmDifferentType {
  // price: string;  // err 型別不一致，會報錯
  weight: number;
}

// 介面中的方法合併
interface AlarmProps {
  price: number;
  alert(s: string): string;
}
interface AlarmProps {
  weight: number;
  alert(s: string, n: number): string;
}

// 相當於
interface Alarm {
  price: number;
  weight: number;
  alert(s: string): string;
  alert(s: string, n: number): string;
}
