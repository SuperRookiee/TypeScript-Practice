/**
 * 제네릭
 */

//제네릭 함수
function func<T>(value: T): T {
    return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

let arr = func([1, 2, 3, "Hi"]);
let tuple = func<[number, number, number, string]>([1, 2, 3, "Hi"]);