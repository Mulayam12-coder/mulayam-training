
//javascript objects can be created in different ways


function showPerson(p){
    console.log(`name=${p.name}\tage=${p.age}`);
}


//Approach#1 -- new Object() with dot notaion
//1.1 Create Object using newObject
let p1=new Object();  
//1.2 Assign properties using '.'
p1.name='Vivek';   //now p1 has a name property
p1.age=100; //now p1 has an age property
showPerson(p1) //{ name: 'Vivek', age: 100 }  <-- Javascript Object Notaion a.k.a JSON


//Approach#2 -- JSON format
let p2= {   // note {} is same as new Object()

    name:'Shivanshi',    //note we use ':' and not '-'
    age:14               // we dont need . and we separate all properties using ,
};

showPerson(p2);


//Approach#3 -- dictionary notation
//Every object is internally a dictionary

let p3={} ; //shorthand for : p3=new Object()

p3["name"]='Sanjay' ; //same as p3.name='Sanjay'

p3["age"]=50;         //same as p3.age=50


showPerson(p3);

console.log(p1["name"],p1['age']);  //will print p1.name and p1.age




//Note: all the three formats can be used interchangebly




