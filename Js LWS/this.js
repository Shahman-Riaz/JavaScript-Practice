// const person = {
//     firstName: 'John',
//     lastName: 'Doe', 
//     fullname() {
//         return this.firstName + " " + this.lastName
//     },
//     getFullName() {
//         return this
//     }
// }

// console.log(person.getFullName())



const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName
    }
}
const person2 = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log(person1.fullName.call(person2))