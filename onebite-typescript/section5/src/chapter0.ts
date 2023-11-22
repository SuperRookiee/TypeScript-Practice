/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b: number): void;
    // sayHi: () => void; 
}

const person: Person = {
    name: "고현욱",
    // age: 27,
    sayHi: function () {
        console.log("Hi");
    }
}

person.sayHi();
person.sayHi(1, 2);