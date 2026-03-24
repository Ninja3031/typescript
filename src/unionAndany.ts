let subs : number | string = "1M"

let apiRequestStatus: 'pending' | 'success' | 'failed' = 'pending'

let airlineSeat : 'window' | 'aisle' | 'middle' = 'aisle'

airlineSeat = 'window'

const orders = ['12' , '20' , '30' , '40' , '50']

let currentOrder : string | undefined;

for(let order of orders){
    if(order === '28'){
        currentOrder = order
        break
    }
    currentOrder = "11";
}

console.log(currentOrder);