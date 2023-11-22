/**
 * 함수 타입 정리
 */


const add = (a: number, b: number): number => {
    return a + b;
}

/**
 * 함수의 매개변수
 */

const introduce = (name = "고현욱", age: number, tall?: number) => {
    console.log(`name : ${name}`);
    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }
}

introduce("SuperRookiee", 25, 175);

introduce("SuperRookiee", 25);

/*/*/
const getSum = (...rest: number[]) => {
    let sum = 0;
    rest.forEach((n) => sum += n);
}
/* */
/*/*
const getSum = (...rest: [number, number, number]) => {
    let sum = 0;
    rest.forEach((n) => sum += n);
}
/* */

getSum(1, 2, 3) // 6
getSum(1, 2, 3, 4, 5) // 15