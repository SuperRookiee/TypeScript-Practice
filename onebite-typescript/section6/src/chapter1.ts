/**
 * 타입스크립트 클래스
 */

const employeeA = {
    name: "고현욱",
    age: 25,
    position: 'developer',
    work() {
        console.log("일함");
    },
}

class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    //생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //매서드
    work() {
        console.log("일함");
    }
}

class ExecutiveOfficer extends Employee {
    //필드
    officeNumber: number;

    //생성자
    constructor(name: string, age: number, position: string, officeNumber: number) {
        super(name,age, position)
        this.officeNumber = officeNumber;
    }
}

const employeeB = new Employee("고현욱", 26, "개발자");
console.log(employeeB);
employeeB.work();

const employeeC: Employee = {
    name: "",
    age: 0,
    position: "",
    work() {},
}