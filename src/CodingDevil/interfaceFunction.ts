//인터페이스로 함수 만들기
interface Add {
    (num1:number, num2:number):number;
}

interface IsAdult {
    (age:number):boolean;
}

const add: Add = function(x, y) {
    return x+y;
}

const a:IsAdult = (age) => {
    return age > 19;
}

export class interfaceFunction {
    constructor(){
        console.log(add(10, 20));
        console.log(a(30));
    }
}

