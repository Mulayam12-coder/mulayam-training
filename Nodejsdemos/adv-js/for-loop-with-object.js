/*
for-in loop is useful to access all properties of an object

for(var prop in person){
    //prop is the property names like name, age, eat() etc
}


*/
let person={name:'Vivek',email:'vivek@conceptarchitect.in'};
person.eat=function(food){
    return `${this.name} eats ${food}`;
};

for(let key in person){
    if (typeof(person[key])!=='function') //remove the if to see even functions
        console.log(key, person[key]);
}

