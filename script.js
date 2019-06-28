class Counter {
    constructor (){
        this.number = 0

        this.render()
    }

    inc(){
        this.number = this.number + 1
    }

    render(){
        const headerElement = document.createElement('h1') // utworzenie elementow w HTML
        const btnElement = document.createElement('button')

        headerElement.innerText = this.number 
        btnElement.innerText = '+'

        document.body.appendChild(headerElement)
        document.body.appendChild(btnElement)
    }
}

const counter1 = new Counter()
const counter2 = new Counter()

console.log(counter1)
console.log(counter2)

console.log(counter1 === counter2)
