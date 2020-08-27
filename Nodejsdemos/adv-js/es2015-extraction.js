

function Counter(value=0){

    this.increment=function(delta=1){
        value+=delta;
        return value;
    }

    this.decrement=function(delta=1){
        value-=delta;
        return value;
    }

    this.set=function(newValue=0){
        value=newValue;
    }
    this.get=function(){
        return value;
    }

}

c1=new Counter();
while(c1.increment()<5)
    console.log('calling c1.increment');


//what if I want just one function from an object
//let increment=new Counter().increment; //I need only increment function
//ES2015 extraction syntax

let {increment} = new Counter(); //create counter and get the increment function

while(increment()<5){
    console.log('calling increment');
}


//I can rename a function while extracting
//let decr=new Counter(5).decrement;

//if you need to change the name of extraction

let {decrement:decr} =new Counter(5); //take decrement as decr


while(decr()>0)
    console.log('decr')




