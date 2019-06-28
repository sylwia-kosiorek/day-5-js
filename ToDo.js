class ToDo {
    constructor(selector) {
        this.mainContainerElement = document.querySelector(selector)
        this.uiContainer = null
        this.tasksContainer = null

        this.isLoading = false
        this.tasks = [
            {
                taskName: 'Wynieś śmieci',
                isCompleted: true
            }
        ]
    }

    init() {
        this.uiContainer = document.createElement('div')
        this.tasksContainer = document.createElement('div')
        this.mainContainerElement.appendChild(this.uiContainer)
        this.mainContainerElement.appendChild(this.tasksContainer)

        this.render()
    }

    renderTask(taskName, isCompleted) {
        const taskElement = document.createElement('div')

        taskElement.innerText = taskName

        if(isCompleted) {
            taskElement.style.textDecoration = 'line-through'
        }

        taskElement.addEventListener(
            'click',
            () => {}
        )

        taskElement.addEventListener(
            'dblclick',
            () => {}
        )

        return taskElement
    }

    render() {
        this.tasksContainer.innerText = ''

        if (this.isLoading) {
            this.tasksContainer.innerText = 'Ładowanie...'
            return
        }

        if (this.tasks.length === 0) {
            this.tasksContainer.innerText = 'Brak zadań!'
            return
        }

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i]
            const taskName = task.taskName
            const isCompleted = task.isCompleted

            const item = this.renderTask(taskName, isCompleted)

            this.tasksContainer.appendChild(item)
        }
    }
}