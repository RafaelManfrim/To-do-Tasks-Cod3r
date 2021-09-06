import TaskList from '../../model/TaskList'
import Task from '../../model/Task'
import ListItem from './ListItem'

type ListProps = {
    tasks: TaskList
    changed: (tasks: TaskList) => void
}

export default function List(props: ListProps){

    function renderTasks(){
        const { allTasks } = props.tasks
        return allTasks.map(task => {
            return <ListItem key={task.id} taskDescription={task.description} finished={task.finished} alternateStatus={() => {
                const taskChanged = task.alternateStatus()
                const newList = props.tasks.modifyTask(taskChanged)
                props.changed(newList)
            }} />
        })
    }

    return (
        <div className="flex w-3/5">
            <ul className="w-full list-none bg-white shadow-lg">
                {renderTasks()}
            </ul>
        </div>
    )
}