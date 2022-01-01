const carMarkers: string[] = ["ford", "toyota", "chevy"]; // 陣列內全部都是字串

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]]; // 陣列內全部都是陣列且值皆為字串

// type array advantages
// 1) Help with inference when extracting values
const car = carMarkers[0];
const myCar = carMarkers.pop();

// 2) Prevent incompatible values to the array
// carMarkers.push(100); // err

// 3) Help with array method
carMarkers.map((car: string): string => {
  return car.toUpperCase();
});

// 4) Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push("2030-10-10");
importantDates.push(new Date());
// importantDates.push(100); //err
