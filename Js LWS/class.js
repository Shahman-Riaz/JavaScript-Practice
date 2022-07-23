class Person {
    constructor(name, age, hobby) {
        this.name = name;
        this.age = age;
        this.hobby = hobby
    }

    activity(income) {
        return `His name is ${this.name}, age is ${this.age} and hobby is ${this.hobby}. His income is ${income}`
    }

    liked() {
        return `${this.name} likes to ${this.hobby}`
    }
}

const rahim = new Person('Rahim', 20, 'gardening')
const karim = new Person('Karim', 23, 'drawing')

console.log(rahim.activity('300'));