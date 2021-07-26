const arr = [['a', 1], ['b', 2]];

const convert = (array) => array.reduce((accumulator, value) => {
      Array.isArray(value) && (accumulator[value[0]] = value[1])
      return accumulator;
   }, {});

console.log(convert(arr));
