const mixedArr = ['lws', false, undefined, 'learn with summit', '', 'apple', 40, 'k', true, 'thanks all', NaN] 

// var arr2 = []

// for(let i = 0; i < mixedArr.length; i++){
//     if (mixedArr[i]){
//         arr2.push(mixedArr[i])
//     }
// }

// console.log(arr2);


const trueArray = mixedArr.filter((el) => {
    if(el) {
        return true;
    }
    else{
        return false;
    }
})

console.log(trueArray);