class ToDo {
    constructor (selector){
        this.mainContainerElement = document.querySelector(selector)
        this.uiContainer = null
        this.taskContainer = null

        this.isloading = false
        this.task = [
            {
                taskName: 'Learn JS',
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

        if(this.tasks.length === 0) {
            this.tasksContainer.innerText = 'No tasks to do'
            return
        }
    }
}