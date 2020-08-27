

function f1( x){
    return x*2;
}

function f2(){

    //it is returning the same global f1() everytime
    return f1; //a function can return another function as a result
}

let x=f2(); //what is x? it is f1()

let y=f2(); //again the function f1()

console.log(x);

console.log(y);

console.log(x===y); //should return true


