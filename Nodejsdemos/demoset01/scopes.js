

var g='global'; //this is a explicit global variable available to everyone

function f1(){
    console.log('in f1()');
    console.log('g',g);

    var f1local='f1local';  //explicit local variable. available only in this function
    console.log('f1local',f1local);
    g='global modified by f1()';
}
function outer(){
    console.log('in f2()');
    console.log('g',g);
    f2local='f2local';     //no var here, makes f2local as 'IMPLICIT GLOBAL VARIABLE' even if it is defined inside a function
    console.log('f2local',f2local);    
    g='global modified by f2()';
}
function f3(){
    console.log('in f3()');
    console.log('g',g);    
    console.log('f2local',f2local);
    console.log('f1local',f1local);
}
f1();
outer();
f3();