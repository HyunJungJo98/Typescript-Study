// union
interface Car {
    name:"car",
    color:string,
    start():void;
}

interface Mobile {
    name:"mobile",
    color:string,
    call():void,
}

function getGift(gift:Car | Mobile){
    if (gift.name==="car"){
        gift.start();
    }
    else {
        gift.call();
    }
}

// intersection
interface Toy {
    name:string;
    color:string;
    price:number;
}

interface Car2 {
    name:string;
    start():void;
}

const toyCar: Toy & Car2 = {
    name:"타요",
    start() {},
    color:"blue",
    price : 2000,
}