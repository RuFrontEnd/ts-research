"use strict";
const student = {
    name: "ming",
    gender: "Male",
    birth: new Date(2000, 1, 30),
};
const keys = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};
// 結論: interface 可重複宣告 => 且結果為重複宣告之交集
const oldCivic = {
    name: "civic",
    year: 2000,
    broken: true,
    summary() {
        return `Name:${this.name}`;
    },
};
const helicopter = {
    name: "eagle-008",
    speed: 300,
    backup: "new one",
};
let KingKong = {
    name: "King",
    food: "meet",
    backup: "fierce",
};
let maoMao = {
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
    summary() {
        return `My drink has:${this.sugar} grams of sugar`;
    },
};
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
