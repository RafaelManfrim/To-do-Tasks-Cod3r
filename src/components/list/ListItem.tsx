import Selection from './Selection'

type ListItemProps = {
    taskDescription: string
    finished: boolean
    alternateStatus: () => void
}

export default function ListItem(props: ListItemProps){

    const listItemStyle = 'flex items-center bg-white border-b border-gray-400 p-4 cursor-pointer'
    const finishedStyle = props.finished ? 'line-through text-gray-400' : 'text-gray-600'

    return (
        <li className={listItemStyle} onClick={props.alternateStatus}>
            <Selection selected={props.finished}/>
            <span className={'ml-3 text-xl ' + finishedStyle}>{props.taskDescription}</span>
        </li>
    )
}