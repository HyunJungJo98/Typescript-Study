abstract class Car4 {
    color:string;
    constructor(color:string) {
        this.color = color;
    }
    start() {
        console.log("start");
    }

    abstract doSomething():void;
}

class Audi extends Car4 {
    constructor(color:string) {
        super(color)
    }
    // 추상 함수를 꼭 구현해줘야 함
    doSomething(): void {
        alert(3);
    }
}