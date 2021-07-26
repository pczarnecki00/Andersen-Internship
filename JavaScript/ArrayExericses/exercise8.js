const arr = [1,2, [3, 4], [5]];

const flatten = (array) => array.reduce((accumulator, value) => accumulator.concat(Array.isArray(value)? flatten(value): value), []);

console.log(flatten(arr));
