"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Efuction = void 0;
class Efuction {
}
exports.Efuction = Efuction;
function hello(name) {
    // name이 없으면 "word" 반환
    return `Hello, ${name || "word"}`;
}
// 위 함수와 같음
function hello2(name = "word") {
    return `Hello, ${name}`;
}
// optional 파라미터는 꼭 맨 뒤에 쓸 것
// 앞에 쓸 거면 undefined로 default값 주기
function hello3(age, name) {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}`;
    }
    else {
        return `Hello, ${name}`;
    }
}
// 파라미터를 배열 형태로 받기
// 파라미터를 몇 개를 주든지 배열로 받을 수 있음
function add(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
const result = hello();
const result2 = hello('HJ');
console.log(result);
console.log(result2);
const addResult = add(1, 2, 3);
console.log('addResult:', addResult);
const Sam = { name: 'Sam', age: 30 };
// this의 타입 지정해주기
function showName(age, gender) {
    console.log(this.name);
}
function join(name, age) {
    if (typeof age === "number") {
        return {
            name,
            age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요";
    }
}
const a = showName.bind(Sam);
a(30, 'f');
//반환 값이 User 또는 string이기 때문에 확신이 없음
// 53번째 줄 추가
const sam = join("Sam", 30);
// 마찬가지로 54번째 줄 추가
const jane = join("Jane", "30");
//# sourceMappingURL=function.js.map