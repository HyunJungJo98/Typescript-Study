const uk:UserKey = 'id';

// interface User {
//     id?:number;
//     name?:string;
//     age?:number;
//     gender?:"m"|"f";
// }
// 와 같음

// User는 utility에 있음
let admin: Partial<User>= {
    id:1,
    name:"Bob",
    // job:"" : 에러 발생
}

// <--Required-->
interface User2 {
    id:number;
    name:string;
    age?:number;
    gender:"m"|"f";
}

// optional도 필수로 바꿔줌
let admin2:Required<User> = {
    id:1,
    name:"Bob",
    gender:"m",
    age:20,
}