const arr = [1, 2, 3, 1, 2, 3];

const arrayFilter = (array, ...args) => {
    args.forEach(element=>{
        array = array.filter(item => item != element);
    })
    return array;
};

console.log(arrayFilter(arr,1,2));