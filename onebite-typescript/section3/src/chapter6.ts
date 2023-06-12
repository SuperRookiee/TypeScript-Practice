/* 
 타입 단언 (type assertion)
 */
type Person = {
    name: string;
    age: number;
}

let person = {} as Person;
person.name = 'HyunWook';
person.age = 25;


type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;


/* 
 타입 단언의 규칙
 값의 as 단어 <- 단언식
 A as B
 A가 B의 슈퍼타입 이거나
 A가 B의 서브타입 이여야 한다
*/
let num1 = 10 as never;
let num2 =10 as unknown;

let num3 = 10 as unknown as string;


/*
 const 단언
*/
let num4 = 10 as const;
let cat = {
    name: "야옹이",
    color: "yellow",
} as const;

// cat.name = '';


/* 
 Non Null 단언
*/

type Post = {
    title: string;
    author?: string;
};

let post : Post = {
    title : "게시글1",
    author : "HyunWook",
}

const len : number = post.author!.length;
