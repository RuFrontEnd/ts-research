"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true
console.log(Days[0] === "Sun"); // true
console.log(Days[1] === "Mon"); // true
console.log(Days[2] === "Tue"); // true
console.log(Days[6] === "Sat"); // true
let friday = Days.Fri;
console.log("friday", friday); // 5
var Season;
(function (Season) {
    Season[Season["Winter"] = 4] = "Winter";
    Season[Season["Spring"] = 1] = "Spring";
    Season[Season["Summer"] = 2] = "Summer";
    Season[Season["Fall"] = 3] = "Fall";
})(Season || (Season = {}));
console.log(Season["Winter"] === 4); // true
console.log(Season["Spring"] === 1); // true
console.log(Season["Summer"] === 2); // true 未被賦職者依順序遞增
console.log(Season["Fall"] === 3); // true 未被賦職者依順序遞增
