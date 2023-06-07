// void

function func1(): string {
    return "hello";
}

function func2(): void {
    console.log("hello");
}

// function func3(): undefined {
//     console.log("hello");
//     return;
// }

// function func4(): null {
//     console.log("hello");
//     return null;
// }

// never
// 불가능한 타입

function func3(): never {
    while(true) {}
}

function func4(): never {
    throw new Error();
}
