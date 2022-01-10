var printNumbers = function() {
    for(i=0;i<10;i++)
        console.log(i);
}

// printNumbers();

var squareNumbers = function(num) {
    return num*num
};

var doubleNumbers = function(num) {
    return num*2
};


// console.log(square(5))  

module.exports.squareNumbers = squareNumbers;
module.exports.doubleNumbers = doubleNumbers;