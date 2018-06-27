function factorial(num) {
    //holds the value of the factorial
    var factorialProduct = 1;
    //for loop to get the factorial
    for (var i = num; i >= 1; i--) {
        factorialProduct *=i ;
    };
    //returns the value of the factorial product to be logged on the console
    return factorialProduct;
};
console.log(factorial(4));