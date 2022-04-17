// <--Utility-->
interface User {
    id:number;
    name:string;
    age:number;
    gender:"m"|"f";
}

// type UserKye = 'id' | 'name' | 'age' | 'gender'와 같음
type UserKey = keyof User;