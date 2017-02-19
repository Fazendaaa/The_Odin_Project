$( document ).ready( function( ){
    makeTable( 40 );
});

function makeTable( length ) {
    var row = "<div class='row'></div>";
    var $container = $('.container');
    for (var i = 0; i < length; i++) {
        $container.append( row );
    }

    var $rows = $('.row');

    for (var i = 0; i < length; i++) {
        $rows.append("<div class='square'></div>");
    }

    var $squares = $('.square');
    $squares.css( 'height', dimensionCalc( length ) );
    $squares.css( 'width', dimensionCalc( length ) );
    $squares.mouseenter(function () {
        $( this ).addClass('dot');
    });
}

function dimensionCalc(sideLen) {
    return 550 / (sideLen);
}

function newTable() {
    clearTable();
    var tableSize = prompt('Please enter a new table size (default is 40)', '40');
    makeTable(tableSize);
}

function clearTable() {
    $('.container').empty();
}