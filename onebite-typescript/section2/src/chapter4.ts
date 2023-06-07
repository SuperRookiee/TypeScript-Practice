// 타입별칭
type User = {
    id: number;
    name: string;
    nickname : string;
    birth: string;
    bio: string;
    location: string;
};

let user: User = {
    id: 1,
    name: "HyunWook",
    nickname : "winterlood",
    birth: "1999.04.17",
    bio: "안녕하세요",
    location: "수원시"
};

let user2: User = {
    id: 1,
    name: "홍길동",
    nickname : "winterlood",
    birth: "1999.04.17",
    bio: "안녕하세요",
    location: "부천시"
};


// 인덱스 시그니처
type CountryCodes = {
   [key : string] : string;
};

let countryCodes: CountryCodes = {
    Korea : "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};

type CountryNumberCodes = {
    [key : string] : number;
    Korea: number;
 };

let countryNumberAndStringCodes: CountryNumberCodes = {
    Korea : 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
