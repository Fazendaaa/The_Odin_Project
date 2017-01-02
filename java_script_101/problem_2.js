//                  Even Fibonacci numbers
//                      Problem 2
//
//  Each  new term in the Fibonacci sequence is generated
//  by  adding the previous two terms. By starting with 1
//  and 2, the first 10 terms will be:
//
//          1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
//  By  considering  the  terms in the Fibonacci sequence
//  whose values do not exceed four million, find the sum
//  of the even-valued terms.
//

function add( key1, key2 ) {
    return key1 + key2;
}

function main( ) {
    var limit = 4000000;
    var i = 1;
    var fib = [ 1, 2 ];
    var hits = [];
    var sum = 0;

    do {
        fib.push( fib[ i ] + fib[ i - 1 ] );

        if( 0 === fib[ i ] % 2 ) {
            hits.push( fib[ i ] );
        }
    } while( fib[ ++i ] < limit );
    
    sum = hits.reduce( add, 0 );
    console.log( sum );
}

main( );