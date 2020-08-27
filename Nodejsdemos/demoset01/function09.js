
function multiplierOf(number){

    function multiply(by){
        return number*by;
    }

    return multiply;
}


let m19=multiplierOf(19);  //m19 is a function that multiplies something by 19


let m17=multiplierOf(17);  //m17 is a function that multiplier something by 17


console.log(m19(7)); //what would be the result? how many parameters have we passed?

console.log(m17(7)); //17x7


