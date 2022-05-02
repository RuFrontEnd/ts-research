// generics 泛型 => 執行 function 時才定義型別

function createArray(length: number, value: any): Array<any> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
} // 這樣的寫法無法限制參數 value 的型別

createArray(3, "x"); // ['x', 'x', 'x']

function genericsCreateArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
} // T 表示使用時可以輸入任意型別

genericsCreateArray<string>(3, "x"); // <string> 即 T 的值

// 多值泛型
function swap<T, U>(params: [T, U]): [U, T] {
  return [params[1], params[0]];
}

swap<number, string>([7, "seven"]); // ['seven', 7]

// 泛型推論
const getFirstItem = <T>(arr: T[]): T => {
  return arr[0];
};
getFirstItem(["A", "B", "C"]); // T === string type
getFirstItem([1, 2, 3]); // T === number type

// 泛型約束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
} // 只允許這個函式傳入那些包含 length 屬性的變數

loggingIdentity({ name: "Jack", length: 4 });
// loggingIdentity({ name: "Jack" }); // 少了 length 屬性



function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

const longerArray = longest([1, 2], [1, 2, 3]);
