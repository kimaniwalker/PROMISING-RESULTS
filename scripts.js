// Add together 6 and 2

slowMath.add(6,2)
.then((result) => {
    console.log(result);
    return slowMath.multiply(result,2)

// Wait on the result, log it, and then multiply the result by 2.    
}).then((result) => {
    
    console.log(result);

    return slowMath.divide(result,4)
}).then((result) => {
    console.log(result);
    return slowMath.subtract(result,3)
}).then((result) => {
    console.log(result);
    return slowMath.add(result,98)
}).then((result) => {
    console.log(result);
    return slowMath.remainder(result,2)
}).then((result) => {
    console.log(result);
    return slowMath.multiply(result,50)
}).then((result) => {
    console.log(result);
    return slowMath.remainder(result,40)
}).then((result) => {
    console.log(result);
    return slowMath.add(result,32)
}).then((result) => {
    console.log('The final result is' + result);

}).catch((error) => {
    console.log(error);
})