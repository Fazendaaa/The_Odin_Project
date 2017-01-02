//                  Multiples of 3 and 5
//
//                      Problem 1
//
//  If  we list  all  the natural numbers below 10 that are
//  multiples  of  3 or 5, we get 3, 5, 6 and 9. The sum of
//  these multiples is 23.
//  Find the sum of all the multiples of 3 or 5 below 1000.
//

function add( key1, key2 ) {
    return key1 + key2;
}

function main( ) {
    var limit = 1000;
    var hits = [];

    for( var i = 0; i < limit; i++ ) {
        if( i % first === 0 || i % second === 0 ) {
            hits.push( i );
        }
    }

    var sum = hits.reduce( add, 0 );
    console.log( sum );
}

main( );