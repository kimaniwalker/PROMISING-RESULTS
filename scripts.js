// Add together 6 and 2

slowMath.add(6,2)
.then((result) => {
    console.log(result);
    return slowMath.multiply(result,2)

// Wait on the result, log it, and then multiply the result by 2.    
}).then((result) => {
    
    console.log(result);
})