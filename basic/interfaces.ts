interface Reportable {
  summary(): string;
}
// 結論: interface 基礎語法

interface User {
  name: string;
}

interface UserDetail extends User {
  gender: "Male" | "Female" | "Other";
  birth: Date;
}

const student: UserDetail = {
  name: "ming",
  gender: "Male",
  birth: new Date(2000, 1, 30),
};
// 結論: interface 可繼承

interface Repeatable {
  key1: string;
}

interface Repeatable {
  key2: string;
}

interface Repeatable {
  key3: string;
}

const keys: Repeatable = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
// 結論: interface 可重複宣告 => 且結果為重複宣告之交集

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name:${this.name}`;
  },
};

// 任意屬性
interface AirPlane {
  name: string;
  speed: number;
  [propName: string]: any;
}

const helicopter = {
  name: "eagle-008",
  speed: 300,
  backup: "new one",
};

interface Monster {
  name: string;
  // height: number; // err => number 不是 string 的子集
  [propName: string]: string;
} // 任意屬性型別一定要是確定屬性型別的父級

let KingKong: Monster = {
  name: "King",
  food: "meet",
  backup: "fierce",
};

// 唯獨屬性
interface Creature {
  readonly id: number;
  name: string;
  isOviparous: boolean;
  [propName: string]: any;
} // 任意屬性型別一定要是其他型別的父級

let maoMao: Creature = {
  id: 1,
  name: "Mao",
  isOviparous: false,
  backUp: "I am cute!",
};

// maoMao.id = 2 // err => id是唯獨的不可改變

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has:${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
