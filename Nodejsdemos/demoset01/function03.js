

function average(x,y){   //x and y are formal parameters

    
    
    var count=0; //var is primitive javascript syntax for variable
    let sum=0;   //let is ES2015 keyword to represent local variable. preferred in javascript

    //in every javascript function there is a hidden array containing all parameters 
    //including formal parameters values (here x and y)
    //this is called 'arguments'
    for(let i=0;i< arguments.length;i++){
        sum+=arguments[i];
        count++;
    }

    return sum/count;


}


console.log('average(2,5)', average(2,5))

console.log('average(2)', average(2))

console.log('average(2,5,11,100,200)', average(2,5,11,100,200))

