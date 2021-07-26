const arrayToReverse = [1,2,3];

const reverseArray = (array) => {
    const reversedArray = [];
    array.forEach((element, index, arr) => 

        reversedArray.push( arr[arr.length - index -1]));

    return reversedArray;
}

console.log(reverseArray(arrayToReverse));