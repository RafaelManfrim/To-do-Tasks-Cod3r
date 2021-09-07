import Task from './Task'
import FilterType from './FilterType'

export default class TaskList {
    #allTasks: Task[]
    #usedFilter: FilterType

    constructor(allTasks: Task[], usedFilter: FilterType) {
        this.#allTasks = allTasks
        this.#usedFilter = usedFilter ?? FilterType.NONE
    }

    get allTasks() {
        return this.applyFilters(this.#allTasks)
    }

    get amountOfTasks() {
        return this.allTasks.length
    }

    get usedFilter() {
        return this.#usedFilter
    }

    addTask(newTask: Task): TaskList {
        const taskAdded = [...this.allTasks]
        taskAdded.push(newTask)
        return new TaskList(taskAdded, this.usedFilter)
    }

    modifyTask(modifiedTask: Task): TaskList {
        const allTasks = this.#allTasks.map(task => {
            return task.id === modifiedTask.id ? modifiedTask : task
        })
        return new TaskList(allTasks, this.usedFilter)
    }

    filterNone(): TaskList {
        if(this.usedFilter !== FilterType.NONE){
            return new TaskList(this.#allTasks, FilterType.NONE)
        } else {
            return this
        }
    }

    filterActives(): TaskList {
        if(this.usedFilter !== FilterType.ACTIVE){
            return new TaskList(this.#allTasks, FilterType.ACTIVE)
        } else {
            return this
        }
    }

    filterCompleted(): TaskList {
        if(this.usedFilter !== FilterType.COMPLETED){
            return new TaskList(this.#allTasks, FilterType.COMPLETED)
        } else {
            return this
        }
    }

    private applyFilters(tasks: Task[]): Task[] {
        if(this.usedFilter === FilterType.ACTIVE){
            return tasks.filter(task => !task.finished)
        } else if(this.usedFilter === FilterType.COMPLETED){
            return tasks.filter(task => task.finished)
        } else {
            return [...tasks]
        }
    }

    deleteCompletedTasks(): TaskList {
        const onlyActives = this.#allTasks.filter(tasks => !tasks.finished)
        return new TaskList(onlyActives, FilterType.NONE)
    }
}