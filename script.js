class Counter {
    constructor (){
        this.number = 0
    }

    inc(){
        this.number = this.number + 1
    }
}

const counter1 = new Counter()
const counter2 = new Counter()

console.log(counter1)
console.log(counter2)

console.log(counter1 === counter2)
