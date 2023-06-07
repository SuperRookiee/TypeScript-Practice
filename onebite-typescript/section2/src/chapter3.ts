// object
//객체 리터럴 타입
let user: {
    id?: number; //? 선택적(Optional) 프로퍼티
    name: string;
} = {
    id: 1,
    name: "HyunWook"
};

let dog: {
    id: string;
    name: string;
} = {
    id: "뽀삐",
    name: "brown"
};

user = {
    name: "홍길동",
}

let config: {
    readonly apiKey: string
} = {
    apiKey: "MY API KEY",
}

// config.apiKey = "hacked";