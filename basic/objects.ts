const profile = {
  person: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const normalAge: number = profile.age; // 解構賦值寫法
const { age, person }: { age: number; person: string } = profile; // 解構賦值寫法
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
