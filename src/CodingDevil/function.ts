export class Efuction {

}

function hello(name?:string) {
    // name이 없으면 "word" 반환
    return `Hello, ${name||"word"}`;
}

// 위 함수와 같음
function hello2(name:string = "word") {
    return `Hello, ${name}`;
}

// optional 파라미터는 꼭 맨 뒤에 쓸 것
// 앞에 쓸 거면 undefined로 default값 주기
function hello3(age:number | undefined, name:string):string {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age}`;
    } else {
        return `Hello, ${name}`
    }
}

// 파라미터를 배열 형태로 받기
// 파라미터를 몇 개를 주든지 배열로 받을 수 있음
function add(...nums:number[]) {
    return nums.reduce((result, num) => result + num, 0);
}

const result = hello();
const result2 = hello('HJ')
console.log(result);
console.log(result2);

const addResult = add(1, 2, 3);
console.log('addResult:', addResult);



interface User {
    name: string;
    age:number;
}

const Sam: User = {name:'Sam', age:30}

// this의 타입 지정해주기
function showName(this:User, age:number, gender:'f'|'m') {
    console.log(this.name);
}

const a = showName.bind(Sam);
a(30, 'f');

// 오버로드 : 같은 함수이나 매개변수의 타입, 개수에 따라 다른 방식으로 동작
function join(name:string, age:number) : User;
function join(name:string, age:string) : string;
function join(name:string, age:number | string) : User | string{
    if(typeof age === "number") {
        return {
            name,
            age,
        };
    }
    else {
        return "나이는 숫자로 입력해주세요";
    }
}

//반환 값이 User 또는 string이기 때문에 확신이 없음
// 53번째 줄 추가
const sam:User = join("Sam", 30);
// 마찬가지로 54번째 줄 추가
const jane:string = join("Jane", "30");