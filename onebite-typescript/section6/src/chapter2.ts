/**
 * 접근 제어자
 * acess modifer
 * => public private protected
 */

class Employee {
    // 필드
    private name: string;
    protected age: number;
    public position: string;

    //생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    //매서드
    work() {
        console.log(`${this.name} 일함`);
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

    //매서드
    func() {
        // this.name;
        this.age;
    }
}

const employee = new Employee("고현욱", 25, "developer");
// employee.name = "홍길동";
// employee.age = 27;
employee.position = "디자이너"
