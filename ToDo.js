class ToDo {
    constructor (selector){
        this.mainContainerElement = document.querySelector(selector)
        this.uiContainer = null
        this.taskContainer = null

        this.isloading = false
        this.task = [
            {
                taskName: 'Wyniesc smieci',
                isCompleted: false
            }
        ]

        this.init()
    }

    init() {
        this.uiContainer = document.createEelement ('div')
        this.taskContainer = document.createEelement ('div')
        this.mainContainerElement.appendChild(this.uiContainer)
        this.mainContainerElement.appendChild(this.taskContainer)

        this.render()
    }

    render(){
        this.tasksContainer.innerText = ''

        if(this.isLoading) {
            this.tasksContainer.innerText = 'Loading'
            return
        }
    }
}