import exp from "constants";
import faker from "faker"; // yarn add faker => 假資料模擬套件  / yarn add @types/faker --save => faker 套件型別定義檔

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

export { User };
