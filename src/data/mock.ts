import FilterType from '../model/FilterType'
import Task from '../model/Task'
import TaskList from '../model/TaskList'

const initialTasks: Task[] = [
    Task.createActiveTask(1, 'Study Next'),
    Task.createFinishedTask(2, 'Clean the bedroom'),
    Task.createActiveTask(3, 'Fix the car'),
]

export default new TaskList(initialTasks, FilterType.NONE)