"use strict";
// never type => 1. 無法跳脫出該函式或方法 2.出現例外結果中斷執行
let infiniteLoop = () => {
    while (true) {
        // stuck
    }
};
