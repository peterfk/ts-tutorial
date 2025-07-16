console.log("Hello");

let firstname: string = "Dylan"
let age: number = 32
const married: boolean = false

console.log(`Hello ${firstname}`)
console.log(`you are ${age} and married: ${married}`)

firstname = "Chuck"
age = 33

const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'. 

//tuple
const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

console.log(car)

//enum
enum CardinalDirections {
  North,
  East,
  South,
  West
}
const currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'. 