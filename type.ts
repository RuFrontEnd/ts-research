const today = new Date();
today.getMonth();
// today.abc; // 這邊會提示 abc 不包含在 Date 物件內

const person = {
  age: 20,
};
// person.abc // err

class Color {

}
const red = new Color()
// red.abc // err