//object ko shape dena
interface chai{
    name : string
    price : number
    isHot : boolean
    milk? : boolean
}

const masalaChai : chai = {
    name : "Masala Chai",
    price : 20,
    isHot : true
    // milk : true
};

interface Shop{
    readonly id : number
    name : string
    price : number
}

const s : Shop = {
    id : 1,
    name : "Chai Corner",
    price : 100
}

interface DiscountCalculator{
    (price : number) : number
}

const apply50 : DiscountCalculator = (price) => {
    return price * 0.5
}

interface TeaMachine {
    start() : void
    stop() : void
}

const machine : TeaMachine = {
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    }
}

interface chaiRatings{
    [flavour : string] : number
}

const rating : chaiRatings = {
    masala : 4.6,
    ginger : 4.5,
    elaichi : 4.3
}

//merging feature

interface User{
    name : String
}


interface User{
    age : number
}

const u : User = {
    name : "Aadiraj",
    age : 20
}

interface A {
    a : string
}

interface B {
    b : string
}

interface C extends A , B{}


