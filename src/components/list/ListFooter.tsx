import FilterType from '../../model/FilterType'
import TaskList from '../../model/TaskList'
import ListButton from './ListButton'

type ListFooterProps = {
    tasks: TaskList
    changed: (tasks: TaskList) => void
}

export default function ListFooter(props: ListFooterProps){

    const taskAmount = props.tasks.amountOfTasks

    return (
        <li className="flex p-5">
            <div className="flex-1 hidden lg:inline">
                <span className="text-gray-500">{taskAmount} {taskAmount === 1 ? 'Task encountered' : 'Tasks encontered'} </span>
            </div>
            <div className="flex-1 text-xs sm:text-base">
                <ListButton cls='' selected={props.tasks.usedFilter === FilterType.NONE} onClick={() => props.changed(props.tasks.filterNone())}>All</ListButton>
                <ListButton cls="mx-3" selected={props.tasks.usedFilter === FilterType.ACTIVE} onClick={() => props.changed(props.tasks.filterActives())}>Actives</ListButton>
                <ListButton cls='' selected={props.tasks.usedFilter === FilterType.COMPLETED} onClick={() => props.changed(props.tasks.filterCompleted())}>Completed</ListButton>
            </div>
            <div className="text-xs sm:text-base">
                <ListButton onClick={() => {props.tasks.deleteCompletedTasks}}>Delete completed</ListButton>
            </div>  
        </li>
    )
}