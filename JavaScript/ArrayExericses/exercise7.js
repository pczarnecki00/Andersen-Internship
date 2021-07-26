const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];
const arr4 = [1, 2, 3, 4];

const compareArr = (firstArr, secondArr) => {
     
    return (firstArr.length == secondArr.length) && (firstArr.map((element, index) => secondArr[index] == element).includes(false) ? false : true); 
    // && firstArr.map((element, index) => (secondArr[index] == element).includes(false) ? false : true
}

console.log(`First compare arr1 and arr2: ${compareArr(arr1, arr2)}`);
console.log(`First compare arr2 and arr3: ${compareArr(arr1, arr3)}`);
console.log(`First compare arr1 and arr4: ${compareArr(arr1, arr4)}`);
