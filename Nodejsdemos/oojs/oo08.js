
function Person(){ 
    
}

Person.prototype.eat=function(food){
    console.log(`${this.name} eats ${food}`);
}

p1=new Person();
p2=new Object();

p1.name='Vivek';
p2.name='Shivanshi';

p1.eat('food');
//p2.eat('food'); //eat not present in object or its prototype

let name='Vivek';

//console.log(name.getType());


//it is not available to all objects
Object.prototype.getType=function(){
    return typeof(this);
}

let values=[1,2,3,4,5];
let n=20

function hello(){

}

console.log(name.getType());
console.log(values.getType());
console.log(n.getType());
console.log(hello.getType());





