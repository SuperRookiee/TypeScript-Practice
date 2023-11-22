/**
 * map 매서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((item) => item + 2);
// [2, 4, 6]

function map<T, U>(arr: T[], callback: (item: T) => U) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

map(arr, (item) => item * 2);
map(["hi", "hello"], (item) => parseInt(item));


/**
 * forEach 매서드
 */
const array = [1, 2, 3];
array.forEach((item) => console.log(item));

function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach(array, (item) => {
    console.log(item.toFixed());
})

forEach(['1,2,3', '4,5,6'], (item => {
    item;
}))