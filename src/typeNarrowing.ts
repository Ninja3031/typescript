function getChai(kind : string | number){
    if(typeof kind === 'string'){
        return `making chai for you ${kind}`
    }
    return `Chai order number: ${kind}`
}

function serveChai(msg?: string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default message`;
}

function orderChai(size : 'medium' | 'small' | 'large' | number){
    if(size === 'small'){
        return `small cutting chai is ready`
    }else if(size === 'medium'){
        return `medium cutting chai is ready`
    }else if(size === 'large'){
        return `large cutting chai is ready`
    }else{
    }
}

class Kulhad {
    serveChai() {
        return `serving kulhad chai`
    }
}


class cutting {
    serveChai() {
        return `serving cutting chai`
    }
}

function serve(chai : Kulhad | cutting){
    if(chai instanceof Kulhad){
        return chai.serveChai();
    }
}

type chaiOrder = {
    type : string
    sugar : number
}

function isChaiOrder(obj : any): obj is chaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(order : chaiOrder | string){
    if(isChaiOrder(order)){
        return `serving ${order.type} chai with ${order.sugar} sugar`
    }else{
        return `serving ${order}`
    }
}

type masalaChai = {type : "masala" ; spiceLevel : number}
type gingerChai = {type : "ginger" ; amount : number}
type elaichiChai = {type : "elaichi" ; aroma : number}

type Chai = masalaChai | gingerChai | elaichiChai

function makeChai(order : Chai){
    switch(order.type){
        case "masala":
            return `masala chai`
            break;
        case "ginger":
            return `ginger chai`
            break;
        case "elaichi":
            return `elaichi chai`
            break;  
    }
}

function brew(order: masalaChai | gingerChai){
    if("spiceLevel" in order){

    }
}

function isString(arr:unknown): arr is string[] {
    
}
