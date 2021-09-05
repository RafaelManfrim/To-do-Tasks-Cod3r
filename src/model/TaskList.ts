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

    private applyFilters(tasks: Task[]): Task[] {
        if(this.usedFilter === FilterType.ACTIVE){
            return tasks.filter(task => !task.finished)
        } else if(this.usedFilter === FilterType.COMPLETED){
            return tasks.filter(task => task.finished)
        } else {
            return [...tasks]
        }
    }
}