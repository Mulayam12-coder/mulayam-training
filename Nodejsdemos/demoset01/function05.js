
//the function 'plus' is added to the nodejs global context. 
//(or 'windows' object in browser based programming)
function plus(x,y){
    return x+y;
}


console.log(plus,typeof(plus));


//another name 'add' is created in nodejs global context/browser window object
let add=plus;  //we can assign a function to a variable

//so now we have both 'add' and 'plus' available in the context
console.log(add,typeof(add));

//both add and plus will work
console.log('add(20,30)',add(20,30));
console.log('plus(20,30)',plus(20,30));


//what if I merge these two lines together

//minus is added to nodejs global context/browser window object
//but substract is assigned to minus AND NOT ADDED TO global context
//since 'substract' will not be available in the context, we can drop the function name
// altogether, making it an anonymous function

//Anonymous Function
let minus= function (x,y){
    return x-y;
}

//can be accessed using reference minus
console.log(minus,typeof(minus));
console.log('minus(2,3)',minus(2,3));


