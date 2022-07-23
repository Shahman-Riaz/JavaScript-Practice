function myDisplayer(some) {
    return some
}

function myCalculator(num1, num2, callback) {
    let sum = num1 + num2
    if(callback) {
        callback(sum)
    }
}

myCalculator(5, 5, myDisplayer)
