const chai = {
    name : "Masala Chai",
    price : 20,
    isHot : true
}

//declaring object type

let tea : {
    name : string
    price : number
    isHot : boolean
}

tea = {
    name : "Masala Chai",
    price : 20,
    isHot : true
}

//alist object

type Tea = {
    name : string
    price : number
    ingreadients : string[]
}

const adarkChai : Tea = {
    name : "Dark Chai",
    price : 30,
    ingreadients :["ginger" , "elaichi" , "milk"]
}

//ducktyping

type Cup = {size : string};

let smallCup : Cup = {
    size : "200ml"
}

let bigCup = {size : "500ml" , material : "plastic"}

smallCup = bigCup

type brew = {brewTime : number}

const coffee = {brewTime : 5 , beans : "arabica"}

const chaiBrew:brew = coffee

type User = {
    userName : string,
    password : string
}

const u : User = {
    userName : "aadiraj",
    password : "1234"
}

type item = {name : "string" , price : "number"}
type address = {street : "string" , price : "number"}

type Order = {
    id : string,
    items : item[],
    address : address[]
}

type chai = {
    name : string;
    price : number;
    isHot : boolean;
}

const updateChai = (updates : Partial<chai>) => {
    console.log("updating chai" , updates)
}

updateChai({price : 25})

updateChai({isHot : true})

updateChai({name : "Masala Chai" , price : 25 , isHot : true})

type ChaiOrder = {
    name? : string
    price? : number
    isHot? : boolean
}

const placeOrder = (order : Required<ChaiOrder>) => {
    console.log("placing order" , order)
}

placeOrder({name : "Masala Chai" , price : 25 , isHot : true})

//pick 

type Chai = {
    name : string
    price : number
    isHot : boolean
    ingredients : string[]
}
//similar to partial but very future proof
type BasicChaiInfo = Pick<Chai , "name" | "price">

const chaiInfo : BasicChaiInfo = {
    name : "Masala Chai",
    price : 20
}

//omit

type ChaiNew = {
    name : string
    price : number
    isHot : boolean
    secretIngredients : string
}

type publicChai = Omit<ChaiNew , "secretIngredients">

const publicChaiInfo : publicChai = {
    name : "Masala Chai",
    price : 20,
    isHot : true
}


