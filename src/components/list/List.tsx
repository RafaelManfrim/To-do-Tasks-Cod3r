import TaskList from '../../model/TaskList'
import ListButton from './ListButton'
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
                <li>
                    <ListButton selected={true} onClick={() => {}}>All</ListButton>
                </li>
                <li>
                    <ListButton selected={false} onClick={() => {}}>Actives</ListButton>
                </li>
                <li>
                    <ListButton selected={false} onClick={() => {}}>Completed</ListButton>
                </li>
            </ul>
        </div>
    )
}