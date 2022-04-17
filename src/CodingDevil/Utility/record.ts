
type Grade = '1'|'2'|'3'|'4';
type Score = 'A'|'B'|'C'|'D';

// Grade를 key로, Score를 value로 사용
const score:Record<Grade, Score> = {
    1:'A',
    2:'B',
    3:'C',
    4:'D'
}



interface User4 {
    id:number;
    name:string;
    age:number;
}

function isValid(user:User4) {
    const result:Record<keyof User4, boolean> = {
        id:user.id > 0,
        name: user.name!=='',
        age:user.age > 0
    }
    return result;
}

