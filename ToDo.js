class ToDo {
    constructor(selector) {
        this.mainContainerElement = document.querySelector(selector)
        this.chartContainer = null
        this.uiContainer = null
        this.tasksContainer = null

        this.chart = null

        this.isLoading = false
        this.tasks = []
    }

    init() {
        this.chartContainer = document.createElement('div')
        this.uiContainer = document.createElement('div')
        this.tasksContainer = document.createElement('div')
        this.mainContainerElement.appendChild(this.chartContainer)
        this.mainContainerElement.appendChild(this.uiContainer)
        this.mainContainerElement.appendChild(this.tasksContainer)

        this.chart = new CustomChart(this.chartContainer)

        this.makeUI()
        this.loadFromDb()
        this.render()
    }

    makeUI() {
        const input = document.createElement('input')
        const btn = document.createElement('button')

        btn.innerText = 'Dodaj zadanie'

        btn.addEventListener(
            'click',
            () => {
                this.addTask(input.value)
                input.value = ''
            }
        )


        this.uiContainer.appendChild(input)
        this.uiContainer.appendChild(btn)
    }

    setState(propName, newValue) {
        this[propName] = newValue

        this.chart.updateTasks(this.tasks)
        this.saveToDb()
        this.render()
    }

    loadFromDb() {
        this.setState('isLoading', true)

        fetch('https://js-baza.firebaseio.com/test.json')
            .then(response => response.json())
            .then(value => {
                this.setState('tasks', value || [])
                this.setState('isLoading', false)
            })
    }

    saveToDb() {
        const data = JSON.stringify(this.tasks)

        fetch(
            'https://js-baza.firebaseio.com/test.json',
            {
                method: 'PUT',
                body: data
            }
        )
    }

    addTask(newTaskName) {
        if(!newTaskName) {
            alert('uzupelnij nazwe zadania!!!')
            return
        }
        const newTasks = this.tasks.concat({
            taskName: newTaskName,
            isCompleted: false
        })

        this.setState('tasks', newTasks)
    }

    toggleCompleted(taskIndex) {
        // can be done better using .map to create new tasks array
        // with one task toggled

        const task = this.tasks[taskIndex]

        task.isCompleted = !task.isCompleted

        this.setState('tasks', this.tasks)
    }

    deleteTask(taskIndex) {
        const newTasks = this.tasks.filter((task, index) => index !== taskIndex)

        this.setState('tasks', newTasks)
    }

    renderTask(taskName, isCompleted, taskIndex) {
        const taskElement = document.createElement('div')

        taskElement.innerText = taskName

        if (isCompleted) {
            taskElement.style.textDecoration = 'line-through'
        }

        taskElement.addEventListener(
            'click',
            () => { this.toggleCompleted(taskIndex) }
        )
        taskElement.addEventListener(
            'dblclick',
            () => { this.deleteTask(taskIndex) }
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

            const item = this.renderTask(taskName, isCompleted, i)

            this.tasksContainer.appendChild(item)
        }
    }
}