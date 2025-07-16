console.log("Hello");



// the `: number` here specifies that this function returns a number
function getTime(): number {
  return new Date().getTime();
}

console.log(getTime());

function printHello(): void {
  console.log('Hello!');
}

printHello();

function multiply(a: number, b: number) {
  return a * b;
}

console.log(multiply(2,5))

const x: unknown = 'hello!!';

console.log((x as string).length);

//Classes
class Person {
  name!: string;
}
      
const person = new Person();
person.name = "Jane";

console.log(person);