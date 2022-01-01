class Vehicle {
  drive(): void {
    console.log("chugga chugaa");
  }

  honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();
vehicle.drive();
