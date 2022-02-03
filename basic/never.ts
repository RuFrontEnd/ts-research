// never type => 1. 無法跳脫出該函式或方法 2.出現例外結果中斷執行

let infiniteLoop = () => {
  while (true) {
    // stuck
  }
};

// never type 是任何 type 的子型別

type EitherNumberOrNever = number | never; // 會發現 type EitherNumberOrNever = number => 因為 number 已經涵蓋 never 狀況

