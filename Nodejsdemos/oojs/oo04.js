

let p1= new Object();
p1.name='Vivek';
p1['age']=100;


let p2={name:'Shivanshi'};

//how to add a behavior?
//person should eat

//here this will be active, when the method is associated with an object

function eat(food){
    console.log(`${this.name} eats ${food}`);
}



p1.eat=eat;  //here p1 becomes this
p2.eat=eat; // here p2 becomes this


//invoking object will be treated as 'this'
p1.eat('Dinner'); //p1 is passed as this
p2.eat('Dinner'); //p2 is passed as this

// so let us add another method move

p1.move=function(from,to){
    console.log(`${this.name} moves from ${from} to ${to}`);
};

p1.move('Home','Office');

p2.move('Shcool','Home'); //Oops! p2 doesn't have move defined


