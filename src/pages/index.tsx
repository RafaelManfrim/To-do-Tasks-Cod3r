import { useState } from 'react'
import initialTasks from '../data/mock'
import Task from '../model/Task'
import List from '../components/list/List'
import Form from '../components/form/Form'
import Content from '../components/template/Content'
import Header from '../components/template/Header'

export default function Home() {

	const [tasks, setTasks] = useState(initialTasks)

	function newTaskCreated(newTask: Task){
		setTasks(tasks.addTask(newTask))
	}

	return (
		<main className='flex flex-col h-screen bg-gradient-to-tr from-gray-100 to-gray-400'>
			<Header>
				<Form newTaskCreated={newTaskCreated}></Form>
			</Header>
			<Content>
				<List tasks={tasks} changed={newTasks => {setTasks(newTasks)}} />
			</Content>
		</main>
	)
}