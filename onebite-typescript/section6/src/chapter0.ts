/**
 * 클래스
 */

let studentA = {
    name: "고현욱",
    grade: "A+",
    age: 25,
    study() {
        console.log("열심히 공부 함");
    },
    introduce() {
        console.log("안녕하세요!");
    },
}

class Student {
    // 필드
    name;
    grade;
    age;

    //생성자
    constructor(name: string, grade: string, age: number) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    //매서드
    study() {
        console.log("열심히 공부 함");
    }

    introduce() {
        console.log(`안녕하세요 ${this.name}입니다!`);
    }
}

let studentB = new Student("고현욱", "B+", 26);
console.log(studentB);
studentB.study();
studentB.introduce();


class DeveloperStudent extends Student {
    // 필드
    favoriteSkill;

    //생성자
    constructor(name: string, grade: string, age: number, favoriteSkill: string) {
        super(name, grade, age);
        this.favoriteSkill = favoriteSkill;
    }

    //매서드

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}