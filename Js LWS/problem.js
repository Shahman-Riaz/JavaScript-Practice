function fizzBuzz(number) {
    for (let i = 1; i<=number; i++) {
        if (i % 15 ===0) {
            console.log(`${i} fizzBuzz`)
        }
        else if (i % 3===0) {
            console.log(`${i} fizz`)
        }
        else if(i % 5===0) {
            console.log(`${i} Buzz`)
        }
        else{
            console.log(i)
        }
    }
}

fizzBuzz(100)