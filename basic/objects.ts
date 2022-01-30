let profile = {
  person: "Alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age) {
    this.age = age;
  },
};

// profile.person = 100; // err 根據型別推論, person 應該為 string
// profile = {
//   person: "Jimmy",
//   age: 25,
//   coords: {
//     lat: 25,
//     lng: 40,
//   },
// }; // err 根據型別推論, 少了 setAge 這個鍵
// profile = {
//   person: "Tommy",
//   age: 30,
//   coords: {
//     lat: 80,
//     lng: 120,
//   },
//   setAge(age) {
//     this.age = age;
//   },
//   hobby: "go to gym",
// }; // err 根據型別推論, 多了 hobby 這個鍵
// 結論: 1.對物件裡的屬性覆寫值，其值的型別與該屬性對應的型別相同 2.對物件整體覆寫，其覆寫的物件格式必須完全相同

let undefinedValue = undefined; // 型別推論為 any ( null也有相同現象 )
let objWithNoValue = {
  undefinedValue: undefined, // 型別推論為 undefined ( null也有相同現象 )
};
// 結論: 1.變數值為 nullableType ( undefined, null ) 時, 型別推論該變數為 any 型別 2.物件中的 value 為 nullableType 時, 型別推論就是該值型別

let godOfWar: object = { name: "Kratos" };
// godOfWar.name = "Tier"; // err type 為 object 的時候不支持物件 value 更新
godOfWar = { name: "Tier" }; // 只支持整體物件覆寫
// 結論: 型別為 object 時, 不可直接操作物件 value 的值, 只可完全覆寫整個 object
// godOfWar = '123' // err 不可變為非物件
godOfWar = [1, 2, 3]; // 陣列屬於 object type 的一種, 可覆寫
godOfWar = () => "godOfWar!"; // 函式也屬於 object type 的一種, 可覆寫
godOfWar = new String("godOfWar!"); // 物件實例也屬於 object type 的一種, 可覆寫
// 結論: 陣列、函式、類別、類別實例皆屬於 object 型別



const normalAge: number = profile.age; // 解構賦值寫法
const { age, person }: { age: number; person: string } = profile; // 解構賦值寫法
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
