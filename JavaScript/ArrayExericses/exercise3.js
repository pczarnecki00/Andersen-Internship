const arr = [0, 1, false , false, 2, undefined, 0, null, 3];

const clearUnecessary = (array) => array.filter(element => element);


console.log(clearUnecessary(arr));