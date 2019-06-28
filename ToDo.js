class ToDo {
    constructor(selector) {
      this.mainContainerElement = document.querySelector(selector)
      this.uiContainer = null
      this.tasksContainer = null
  
      this.isLoading = false
      this.tasks = []
    }
  
    init() {
      this.uiContainer = document.createElement('div')
      this.tasksContainer = document.createElement('div')
      this.mainContainerElement.appendChild(this.uiContainer)
      this.mainContainerElement.appendChild(this.tasksContainer)
  
      this.loadFromDb()
      this.render()
    }
  
    setState(propName, newValue) {
        this[propName] = newValue

        this.saveToDb()
        this.render ()
    }

    loadFromDb(){
      this.isLoading = true
  
      fetch('https://js-baza.firebaseio.com/test.json')
        .then(response => response.json())
        .then(value => {
          this.tasks = value || []
          this.isLoading = false
          
          this.render()
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
  
    toggleCompleted(taskIndex) {
      const task = this.tasks[taskIndex]
  
      task.isCompleted = !task.isCompleted
  
      this.render()
    }
  
    deleteTask(taskIndex) {
      this.tasks = this.tasks.filter((task, index) => index !== taskIndex)
  
      this.render()
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