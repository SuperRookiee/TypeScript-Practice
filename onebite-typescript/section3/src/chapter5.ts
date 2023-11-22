/* 
 타입 추론
*/

let a = 10;
let b = "hello";
let c = {
    id: 1,
    name: "고현욱",
    profile: {
        nickname: "superrookiee"
    },
    url: ["https://superrookie.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];


const func = (message = "hello") => {
    return "hello";
}

let d;
d = 10;
d.toFixed();
// d.toUpperCase();

d = "hello";
// d.toFixed();
d.toUpperCase();


const num = 10;
const str = "hello";

let arr = [1, "string"];
