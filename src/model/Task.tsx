export default class Task { 
    #id: number
    #description: string
    #finished: boolean

    constructor(id: number, description: string, finished = false) {
        this.#id = id;
        this.#description = description;
        this.#finished = finished;
    }

    static createActiveTask(id: number, description: string){
        return new Task(id, description)
    }

    static createFinishedTask(id: number, description: string){
        return new Task(id, description, true)
    }

    get id(){
        return this.#id;
    }

    get description(){
        return this.#description;
    }

    get finished(){
        return this.#finished;
    }

    alternateStatus(){
        return this.#finished ?  this.ActivateTask() : this.FinishTask()
    }

    FinishTask(){
        return Task.createFinishedTask(this.#id, this.#description)
    }

    ActivateTask(){
        return Task.createActiveTask(this.#id, this.#description)
    }
}