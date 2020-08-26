
for (var n = 1; n <= 100; n++)

 
{
    var not_prime = false;


    for (var div = 2; div <= (n - 1); div++) 

    
    {
        if (n % div === 0) 
        {not_prime = true;}
    }


    if (not_prime === false) 
    {console.log(n);}
}
