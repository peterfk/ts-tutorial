// import PropTypes from 'prop-types';

const world = "world";
const test = "x";

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}

console.log("hello " + world + test);
console.log(hello("James"));

const a: number = 5;

if (5 == a) {
  // Warning: Use '===' to avoid type coercion (eqeqeq)[2]
}

// let a = 5
// let b = 10
// [a, b] = [b, a]

// const arrow = (bool: any) => bool ? true : false;