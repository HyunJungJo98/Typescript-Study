// 인터페이스로 클래스 상속 받기
interface Car {
    color:string;
    wheels:number;
    start():void;
}

// 추가로 정의해주기, extends는 여러 개 가능
interface Benz extends Car {
    door: number;
    stop():void;
}

const benz:Benz = {
    color:'gray',
    wheels:4,
    start(){
        console.log('go!');
    },
    door: 4,
    stop(){
        console.log('stop!');
    },
}

export class classInterfaceExtends implements Car {
    color:string;
    wheels: number;
    constructor(c:string){
        this.color = c;
    }
    start(){
        console.log('go!');
    }
    example = () => {
        console.log(benz);
        
    }
}