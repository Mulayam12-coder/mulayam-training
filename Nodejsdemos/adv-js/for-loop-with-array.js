/*
There are 3 types of for loop in javascript

1. Simple C style for loop
for(let x=0; x<something;x++){

}

2. for-in loop -- to interate over keys of an object
   Not very useful for accessing an array. Good for an object
for(var x in y){
    //x is the keys (properties) of an object
}

3. for-of loop -- to iterate over values of an array [present in ES2015+]
for(let x of y){

    //all items of array x
}

*/

let array=[2,3,9,2,6]

//for-loop1

for(let i=0;i<array.length;i++)
    console.log('for',i,array[i]);

//for-in loop
for(let x in array){
    console.log('for-in',x,array[x]);  //x is index of the array
}  

//for-of loop
for(let x of array){
    console.log('for-of',x);
}