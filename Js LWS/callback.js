const paymentSuccess = false
const marks = 70
const perparedCertificate = false

function enroll(callback) {
    console.log('Course enrollment is in progress')

    setTimeout(function() {
        if(paymentSuccess){
            callback()
        } else {
            console.log('Payment Failed');
        }
    }, 2000)
}

function progress(callback) {
    console.log('Course on progress...');


    setTimeout(function(){
        if(marks >= 80){
            callback()
        } else {
            console.log('You could not get enough marks to get the certificate');
        }
    }, 3000)
}


function getCertificate(callback) {
    console.log('Preparing your certificate');

    setTimeout(() => {
        if(perparedCertificate) {
            callback()
        } else {
            console.log('Wait few minutes to generate your certificate');
        }
    }, 1000);

}

function getHardCopy() {
    console.log('Congrats! you got the certificate');
    console.log("Send us, you location to get hard copy");
}


// to solve this nested function problem use or look promise.js

enroll(function() {
    progress(function(){
        getCertificate(getHardCopy)
    })
})


