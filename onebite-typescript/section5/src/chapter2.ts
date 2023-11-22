/**
 * 선언 합침
 */

interface Person {
    name: string;
}

interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    name: "hello";
}

interface Lib {
    a: number;
    b: number;
    c: string;
}

const person: Person = {
    name: "",
    age: 27,
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
}