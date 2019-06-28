class ToDo {
    constructor (selector){
        this.mainContainerElement = document.querySelector(selector)
        this.uiContainer = document.createEelement ('div')
        this.taskContainer = document.createEelement ('div')
        this.mainContainerElement.appendChild(this.uiContainer)
        this.mainContainerElement.appendChild(this.taskContainer)

        this.task = [
            {
                taskName: 'Wyniesc smieci',
                isCompleted: false
            }
        ]

        this.render()
    }

    init() {
        this.uiContainer = document.createEelement ('div')
        this.taskContainer = document.createEelement ('div')
        this.mainContainerElement.appendChild(this.uiContainer)
        this.mainContainerElement.appendChild(this.taskContainer)
    }

    render(){
        this.containerElement.innerText = ''
    }
}