// You should implement your task here.n

module.exports = function towelSort(arr) {
    if (arr === undefined) {
        return [];
    }
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i].reverse());
        }
    }
    return newArr.flat();
};
