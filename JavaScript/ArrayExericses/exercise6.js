const arr = [1, 2, 3, 1, 2, 3, 4];

const noDupliactes = (array) => Array.from(new Set(array));


console.log(noDupliactes(arr));