console.log('line 1 code')


setTimeout(() => {
    console.log('line 2 code');
}, 200);

console.log('line 3 code');

setInterval(() => {
    console.log('Bar B Q');
}, 2000);