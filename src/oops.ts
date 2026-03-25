// class Chai {
//     flavour : string
//     price : number
//     isHot : boolean

//     // constructor(flavour : string , price : number , isHot : boolean){
//     //     this.flavour = flavour
//     //     this.price = price
//     //     this.isHot = isHot
//     // }

//     constructor(flavour : string , price : number , isHot : boolean){
//         this.flavour = flavour
//         this.price = price
//         this.isHot = isHot
//     }
// }

// const masalaChai = new Chai("Ginger" , 20 , true)

// masalaChai.flavour = "Masala"

class Chai {
    public flaour : string = "Masala"
    
    private secretIngredienets = "Ginger"

    reveal(){
        return this.secretIngredienets
    }

    protected shopName = "Chai corner"
}

class Shop{
    protected shopName = "Chai Corner"
}

class TeaShop extends Shop{
    getName(){
        return this.shopName
    }
}

new TeaShop().getName

const c = new Chai()

c.reveal()

// c.secretIngredienets

class Walet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Walet()

w.getBalance()

// w.#balance

class cup{
    readonly capacity : number = 250

    constructor(capacity : number){
        this.capacity = capacity
    }
}

class ModernChai {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }

    set sugar(value : number){
        if(value > 5) throw new Error("Too much sugar")
        this._sugar = value
    }
}

const d = new ModernChai()

d.sugar = 3

class Ekchai {
    static shopName = "Chaicode cafe"

    constructor(public flavour : string){}
}

console.log(Ekchai.shopName);

abstract class Drink {
    abstract make():void
}

class Mychai extends Drink{
    make(){
        console.log("making chai");
    }
}

class Heater {
    heat(){}
}

class Chaimaker{
    constructor(private heater : Heater){}

    make(){
        this.heater.heat()
    }
}