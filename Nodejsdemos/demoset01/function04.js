
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

let minus= function substract(x,y){
    return x-y;
}

//minus word is available in the global context/browser's window object
console.log(minus, typeof(minus));
console.log('minus(2,3)',minus(2,3));

//substract is never added to global context and is not available
console.log(substract,typeof(substract));
console.log('substract(2,3)',substract(2,3));


