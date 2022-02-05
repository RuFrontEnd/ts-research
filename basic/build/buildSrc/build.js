"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 指令下 tsc 時, 會按照 tsconfig 的設定去做編譯成 js 檔的動作
const buildB_1 = require("./buildB");
const buildB_2 = __importDefault(require("./buildB"));
console.log("variableValue", buildB_1.variableValue);
console.log("defaultVariableValue", buildB_2.default);
