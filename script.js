class Counter {
    constructor (selector){
        this.containerElement = document.querySelector(selector)
        this.number = 0

        this.render()
    }

    inc(){
        this.number = this.number + 1

        this.render()
    }

    render(){
        this.containerElement.innerText = ''
        const headerElement = document.createElement('h1') // utworzenie elementow w HTML
        const btnElement = document.createElement('button')

        headerElement.innerText = this.number 
        btnElement.innerText = '+'

        btnElement.addEventListener(
            'click',
            (function () {
                this.inc()
            }).bind(this)
        )

        this.containerElement.appendChild(headerElement)
        this.containerElement.appendChild(btnElement)
    }
}

const counter1 = new Counter('.counter1')
const counter2 = new Counter('.counter2')

console.log(counter1)
console.log(counter2)

console.log(counter1 === counter2)
