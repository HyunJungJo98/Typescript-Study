class Car3 {
    // #price:number와 같음
    private price:number;
    protected name:string = "car";
    static wheels = 4;

    color:string;
    constructor(color:string){
        this.color = color;
    }
    start() {
        console.log("start");
        // this.wheels 안 됨
        console.log(Car3.wheels);
        
    }
}

class Bmw extends Car3 {
    constructor(color:string) {
        super(color);
    }
    showName() {
        console.log(super.name);
        
    }
}

const bmw = new Car3("black");

const z4 = new Bmw("black");
// console.log(z4.name); : protected는 클래스 인스턴스로는 참조할 수 없음