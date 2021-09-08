import { useState } from "react"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Task from '../../model/Task'

type FormProps = {
    newTaskCreated: (task: Task) => void
}

export default function Form(props: FormProps){

    const [taskDescription, setTaskDescription] = useState('')

    function createNewTask(){
        if(taskDescription?.trim().length > 0){
            const newTask = Task.createActiveTask(Math.random(), taskDescription)
            props.newTaskCreated(newTask)
            setTaskDescription('')
        }
    }

    const inputStyle = 'w-1/2 py-2 px-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-2xl'

    const buttonStyle = 'ml-3 py-3 px-5 rounded-lg focus:outline-none bg-purple-600 text-white text-xl'

    return (
        <div className='flex flex-1 justify-center'>
            <input className={inputStyle} placeholder='inform your next task:' type="text" value={taskDescription} onChange={e => setTaskDescription(e.target.value)} onKeyDown={e => e.key === 'Enter' ? createNewTask() : false}/>
            <button className={buttonStyle} onClick={createNewTask}>
                <FontAwesomeIcon icon={faPlus}/>
            </button>
        </div>
    )
}