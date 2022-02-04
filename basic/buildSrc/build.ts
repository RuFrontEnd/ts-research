// 指令下 tsc 時, 會按照 tsconfig 的設定去做編譯成 js 檔的動作
import { variableValue } from "./exports";
import defaultVariableValue from "./exports";

console.log("variableValue", variableValue);
console.log("defaultVariableValue", defaultVariableValue);
