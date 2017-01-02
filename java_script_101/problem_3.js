//              Largest prime factor
//                  Problem 3
//
//  The prime factors of 13195 are 5, 7, 13 and 29.
//  What  is the largest prime factor of the number
//  600851475143?
//

function eratosthenes( limit ) {
    var primes = [], nums = [];
    var sqrt = 0, i = 0, j = 0, p = 0;
    
    if( 2 <= limit ) {
        sqrt = Math.sqrt( limit ) - 2;
        
        for( i = 2; i <= limit; i++ )
            nums.push( i );
        for( i = 0; i <=sqrt; i++ ) {
            p = nums[ i ];
            
            if( p )
                for( j = p * p - 2; j < nums.length; j += p )
                    nums[ j ] = 0;
        }
        for( i = 0; i < nums.length; i++ ) {
            p = nums[ i ];
            
            if( p )
                primes.push( p );
        }
    }
    
    return primes;
}

function main( ) {
    var limit = 600851475143;
    var primes = eratosthenes( limit );
    
    console.log( primes[ primes.lenght - 1 ] );
}

main( );