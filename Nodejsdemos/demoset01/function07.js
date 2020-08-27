



function outer(){

    //you can define a function inside another function
    //a new inner() is created everytime outer() is called
    function inner( x){
        return x*2;
    }
    
    //every call of outer() returns a different
    //instance of inner
    return inner; //a function can return another function as a result
}

let x=outer(); //what is x? x is inner function

let y=outer(); //what is y? y is inner function

console.log(x);

console.log(y);


//each time outer() is called, it creates a new inner() and returns it
//the two inner() is not the same object but different ones because they are
//created on different function call
console.log(x===y); //should return false


