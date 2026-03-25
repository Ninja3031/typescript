function makeChai(type : string , cups : number){
    console.log(`making ${cups} cups of ${type} chai`);
}

makeChai("Masala" , 10)

function getPrice() : number{
    return 100;
}

function makeOrder(order : string){
    if(!order)return null
    return order 
}

function logChai():void {
    console.log("making chai");
}

// function giveChai(type? : string){

// }

function giveChai(type : string = "Masala"){
    
}

function orderChai(order: {
    type : string
    sugar : number
    isHot : boolean
}): number {
    console.log(order);
    return 100;

}