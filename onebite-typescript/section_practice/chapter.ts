type A = () => number;
type B = () => 10;

let a: A = () => 100;
let b: B = () => 10;

a = b;

console.log(a()); // 출력: 100 -> 10
console.log(b()); // 출력: 10


type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {
    console.log(value);
};

let d: D = (value) => {
    console.log(value);
};

// c = d; // 에러: Type '(value: 10) => void' is not assignable to type '(value: number) => void'.
d = c;

c(5); // 출력: 5
d(10); // 출력: 10
