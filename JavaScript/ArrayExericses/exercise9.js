const arr = [1, 2, 3, 4, 5, 6, 7];

const makeChunks = (array, chunkValue) => {

    let newArr = new Array();
    let index = 0; 
    do {

        newArr.push(array.slice(index, index + chunkValue))
        index += chunkValue;

    } while (index < array.length);
    return newArr;
}
console.log(makeChunks(arr, 6));