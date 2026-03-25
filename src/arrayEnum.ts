const chaiFlavour: string[] = ['masala' , 'ginger' , 'elaichi']

const rating: number[] = [1 , 2 , 3 , 4 , 5]

const chaiPrice : Array<number> = [10 , 20 , 30]

type Chai = {
    name : string
    price : number
    isHot : boolean
}

const menu : Chai[] = [
    {
        name : "Masala Chai",
        price : 20,
        isHot : true
    },
    {
        name : "Ginger Chai",
        price : 30,
        isHot : true
    }
]

const cities : readonly string[] = ["Delhi" , "Mumbai" , "Kolkata"]

//multi dimensional array

const table : number[][] = [
    [1 , 2 , 3],
    [4 , 5 , 6]
]

let chaiType : [string , number , boolean] 

chaiType = ["Masala" , 10 , true]

let userInfo : [string , number , boolean?]

userInfo = ["Aadiraj" , 10]

const location : readonly [number , number] = [10 , 20]

const chaiItems : [name : string , price : number] = ["Masala" , 10]

//Enums

enum cupSize {
    SMALL,
    MEDIDUM,
    LARGE
}

const size = cupSize.SMALL

enum status{
    pending = 100,
    served,
    cancelled
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
    ELAICHI = "elaichi"
}

function makeChai(type : ChaiType){
    console.log(`making chai ${type}`);
}

makeChai(ChaiType.GINGER)

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugar {
    LOW = 1,
    MEDIDUM  = 2,
    HIGH = 3
}

const s = Sugar.MEDIDUM

console.log(s);

let t : [string , number] = ["Masala" , 10]

t.push("extra sugar")

