

function average(x,y){   //x and y are formal parameters

    //in every javascript function there is a hidden array containing all parameters 
    //including formal parameters values (here x and y)
    //this is called 'arguments'

    console.log('arguments',arguments);

    return (x+y)/2;

}


console.log('average(2,5)', average(2,5))

console.log('average(2)', average(2))



console.log('average(2,5,11,100,200)', average(2,5,11,100,200))

