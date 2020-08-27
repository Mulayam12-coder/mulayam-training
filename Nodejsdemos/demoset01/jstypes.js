
function printType(x){
    console.log(x, 'is of type', typeof(x));
}



printType(29);
printType(29.5);
printType(20>40);
printType(20<50);
printType('x');
printType("x");
printType('hello world');
printType("Hello World");
printType(new Date());
printType([1,2,3]);
printType(new Object());

//in javascript even function is a special type
// a function is just like any other objects number,string or list
//they can be passed to another function
printType(printType);




