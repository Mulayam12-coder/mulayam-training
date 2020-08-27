
//What if I want to create multiple Person
//Each having a name, age
// and they can eat and move


//Let us create one such person
//To create mulitple person object, wrap the entire code
//for one function in a outer function and return the created object


//This function is known as constructor function
//A constructor function should start with upper case letter
function Person(name,age, location='Home'){ //default argument is allowed in ES2015+

    //memory not allocated yet

    //this refers to something that will be created later
    this.name=name;
    this.age=age;
    this.location=location;

    this.toString=function(){
        return `Person[name=${this.name}\tage=${this.age}\tlocation=${location}]`;
    }

    this.eat=function(food){
        console.log(`${this.name} eats ${food}`);
    }

    this.move=function(to){
        this.location=to;
    }

    
}

//to create an object you need to use the keyword new here
let p1=new Person('Vivek',100,'Office');
let p2=new Person('Shivanshi',14); 

let p3= new Object();
p3.name='Sanjay';
p3.age=50;





console.log(`${p1}`);
console.log(`${p2}`);

p1.move('Home');
p1.eat('Dinner');