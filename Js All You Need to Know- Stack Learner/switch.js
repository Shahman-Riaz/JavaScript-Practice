var date = new Date()

var today = date.getDay()

switch(today) {
    case 0 :
        console.log('Today is Sunday')
        break
    case 1 :
        console.log('Today is Monday');
        break
    default: console.log('Another Day');
}