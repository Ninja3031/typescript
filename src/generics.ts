function wrapInArray<T>(item : T): T[]{
    return [item]
}

wrapInArray("masala")

wrapInArray(10)

wrapInArray(true)

wrapInArray({name : "masala"})

function pair <A,B>(a : A , b : B) : [A,B]{
    return [a , b]
}

pair("masala" , 10)

pair("masala" , true)

pair("masala" , {name : "masala"})

interface Box<T> {
    content : T
}

const box : Box<string> = {
    content : "masala"
}

const box2 : Box<number> = {
    content : 10
}

interface apiPromise<T>{
    status : Number,
    data : T
}

const res : apiPromise<string> = {
    status : 200,
    data : "masala"
}

const res2 : apiPromise<{flavour : "masala"}> = {
    status : 200,
    data : {flavour : "masala"}
}





