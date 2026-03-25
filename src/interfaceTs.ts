//one way to write this

// function makeChai(order : {type : string; sugar : number ; strong : boolean}){
//     console.log(order);
// }

// function serveChai(order: {type : string; sugar : number ; strong : boolean}){
//     console.log(order);
    
// }

//another way 

type chaiOrder = {
    type : string
    sugar : number
    strong : boolean
}

function makeChai(order : chaiOrder){
    console.log(order);
}

function serveChai(order: chaiOrder){
    console.log(order);
    
}

type TeaRecipie = {
    water : number
    milk : number
}

class masalaChai implements TeaRecipie{
    water = 100;
    milk = 50;
}

interface cupSize {
    size : 'small' | 'medium' | 'large'
}

class Chai implements cupSize {
    size: "small" | "medium" | "large" = "small";
}

//classes ke liye you need interface jiske liye you need to use implement instead of type

//example error

// type response = {ok : true} | {ok : false}

// class myRes implements Response{
//     ok:boolean = true;
// }

type teaType = "masala" | "ginger" | "elaichi"

function orderChai(type : teaType){
    console.log(type);
}


//union

type baseChai = {teaLeaves: number}

type Extra = {masala : number}

type masalaTea = baseChai & Extra

const cup: masalaTea = {
    teaLeaves : 2,
    masala : 10,
}


// agar kabhi karna hai ya fir kabhi nahi karna

type User = {
    name : string
    bio? : string
}

const user1 : User = {
    name : "Aadiraj"
}

const user2 : User = {
    name : "Aadi",
    bio : "hello"
}

type config = {
    readonly appName : string
    version : number
}

const cfg : config = {
    appName : "MasterJi",
    version : 1
}

// cfg.appName = "Chai aur Typescript"