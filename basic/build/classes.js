"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// public => this method / variable can be called any where
// private => this method / variable can only be called by other methods in this class
// protected => this method / variable can be called by other methods in this class, or by other methods in child classes
class Vehicle {
    constructor(color) {
        this.color = color;
    } // constructor 接受參數來定義一個實例的屬性
    honk() {
        console.log("beep");
    }
}
const vehicle = new Vehicle("red");
// const vehicle = new Vehicle(123); // err
// vehicle.honk() // err
console.log(vehicle.color);
class Car extends Vehicle {
    constructor(wheels, color) {
        super(color);
        this.wheels = wheels;
        this.color = color;
    } // constructor 接受參數來定義一個實例的屬性
    drive() {
        console.log("vroom");
    }
    startDrivingProcess() {
        this.drive();
        this.honk();
    }
}
const car = new Car(4, "red");
// car.drive(); // err 因為是私有方法
car.startDrivingProcess();
