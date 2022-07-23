const person = {
    fName : 'John',
    lName : 'Doe',
    get lang() {
        return this.fName
    },
    set pang(pang) {
        this.fName = pang
    }
}

person.fName = 'bn'
console.log(person);