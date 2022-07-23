const paymentSuccess = false
const marks = 70


function enroll() {
    console.log('Course enrollment is in progress..')

    const promise = new Promise(function(resolve, reject){
        setTimeout(function() {
            if(paymentSuccess){
                resolve()
            } else {
                reject('Payment Failed')
            }
        }, 2000)
    });

    return promise
}

function progress(callback) {
    console.log('Course on progress...');


    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve()
            } else {
                reject('You could not get enough marks to get the certificate');
            }
        }, 3000)
    })

    return promise
}

function getCertificate(callback) {
    console.log('Preparing your certificate');

   const promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('Congrats! You got the certificate');
    }, 2000);
   })

   return promise

}

enroll()
    .then(progress)
    .then(getCertificate)
    .then()
    .catch(function(err){
        console.log(err)
    })













// const stat = true

// console.log('Task 1')





// // promise defination

// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         if(stat) {
//             resolve('Task 2')
//         } else {
//             reject('Failed')
//         }
//     }, 2000);
// })

// // promise call

// promise 
//     .then(function(value){
//         console.log(value)
//     })
//     .catch(function(err){
//         console.log(err)
//     })


//     console.log('Task 3');




