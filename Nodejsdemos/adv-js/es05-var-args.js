
//find average of all numbers passed

//problem: looks like function is taking no parameter
//actually it can take any number of parameter
function average(){
    let sum=0;
    //arguments array is a hidden feature
    //and not clear where it came from
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    return sum/arguments.length;
}

console.log(average(1,2,3,4));
console.log(average(1,2,3,4,5));