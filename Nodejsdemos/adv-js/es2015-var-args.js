
//ES2015 feature
//Collects all the values passed as an array

//function signature clearly tells it is taking any number of paramters
function average(...values){
    let sum=0;
    
    for(let i=0;i<values.length;i++){
        sum+=values[i];
    }
    return sum/values.length;
}

console.log(average(1,2,3,4));
console.log(average(1,2,3,4,5));


let values=[1,2,3,4,5];

console.log(average(values));

console.log(average(...values));