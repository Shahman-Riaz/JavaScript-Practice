// Constructor Function

function Person(fName, lName, age) {
    this.fName = fName
    this.lName = lName
    this.age = age
    this.fullName = function() {
        return this.fName + " " + this.lName;
    }
}

const sumit = new Person('Sumit', 'shah', 35)

Person.prototype.country = 'Bangladesh'

console.log(sumit.country);