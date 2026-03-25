let response : any = "42";

let numericLength : number = (response as string).length;

type Book = {
    name : string
}

let bookString = '{"name" : "Who moved my cheese"}';
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject.name);

const inputElement = document.getElementById("input") as HTMLInputElement;

//comparision between unknown and any 

let value:any

value = "chai"
value = [1 ,2 , 3 , 5 , 5 ]
value = 2.6
value.toUpperCase();

let value2:unknown

value2 = "chai"
value2 = [1 ,2 , 3 , 5 , 5 ]
value2 = 2.6    

if(typeof value2 === "string"){
    value2.toUpperCase()
}

try {

} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error" , error);
}

const data:unknown = "chai and code"
const strData: string = data as string

type Role = "admin" | "user" | "guest"

function redirectBasedOnRole(role:Role) : void{
    if(role === "admin"){
        console.log("Redirecting to admin dashborad");
        return;
    }
    if(role === "user"){
        console.log("Redirecting to user dashborad");
        return;
    }
    role;
}

function neverReturn() : never{
    while(true){}
}
        