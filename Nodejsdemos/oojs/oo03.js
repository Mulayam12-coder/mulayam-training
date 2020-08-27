

let p1= new Object();
p1.name='Vivek';
p1['age']=100;


//how to add a behavior?
//person should eat

function eat(person, food){
    console.log(`${person.name} eats ${food}`);
}

eat(p1,'Lunch');

let p2= {name:'Shivanshi'};

eat(p2,'Maggi');

//But this code doesn't look object oriented
//What I need is p1.eat() and p2.eat()

p1.eat=eat;
p2.eat=eat; //assign the function as a value

p1.eat(p1,'Dinner');

//Problem: p1 is redundant in the previous call. used twice

//Prblem2: who is eating below?

p1.eat(p2,'Dinner'); //who is eating here? p1 or p2? What the other guy is doing?

//now p2 is eating. p1 is just an useless syntax


