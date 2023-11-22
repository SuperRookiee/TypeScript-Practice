/**
 * 인터페이스의 확장
 */

interface Animal {
    name: string;
    color: string;
}

interface Dog extends Animal {
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat { }

const dog: Dog = {
    name: "",
    color: "",
    isBark: true,
}

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
}