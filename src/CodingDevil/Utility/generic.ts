function getSize<T>(arr:T[]) : number {
    return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ["a", "b", "c"];
getSize<string>(arr2);

const arr3 = [false, true, true];
getSize<boolean>(arr3);

interface Mobile2<T>{
    name:string;
    price:number;
    option:T;
}

// 또는 <{color:string; coupon:boolean}>으로 적기
const m1:Mobile2<object> = {
    name:"s21",
    price:1000,
    option:{
        color:"red",
        coupon:false,
    }
}

const m2:Mobile2<string> = {
    name:"s20",
    price:1000,
    option:"good",
}

// 만약 T에 name 속성이 없으면 오류를 발생시켜줌
function showName<T extends {name:string}>(data:T):string {
    return data.name;
}
showName(m1);