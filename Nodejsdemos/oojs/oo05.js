
//What if I want to create multiple Person
//Each having a name, age
// and they can eat and move


//Let us create one such person
//To create mulitple person object, wrap the entire code
//for one function in a outer function and return the created object

function createPerson(name,age, location='Home'){ //default argument is allowed in ES2015+

    var person=new Object();
    person.name=name;
    person.age=age;
    person.location=location;

    person.toString=function(){
        return `Person[name=${this.name}\tage=${this.age}\tlocation=${location}]`;
    }

    person.eat=function(food){
        console.log(`${this.name} eats ${food}`);
    }

    person.move=function(to){
        this.location=to;
    }

    return person;
}


let p1=createPerson('Vivek',100,'Office');
let p2=createPerson('Shivanshi',14); 

console.log(`${p1}`);
console.log(`${p2}`);

p1.move('Home');
p1.eat('Dinner');