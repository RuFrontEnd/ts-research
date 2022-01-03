interface Reportable {
  summary(): string;
}

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
