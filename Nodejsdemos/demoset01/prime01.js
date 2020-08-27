
function isPrime(number){

    if(number<2){
        console.log(number,'is not prime');
        return false;
    }

    for(var x=2;x<number;x++)
        if(number%x===0){
            console.log(number,' is not prime')
            return false;
        }

    console.log(number,'is prime')
    return true;
    
}

isPrime(10)

isPrime(-10)

isPrime(20)

isPrime(2)

isPrime(9)

isPrime(13)