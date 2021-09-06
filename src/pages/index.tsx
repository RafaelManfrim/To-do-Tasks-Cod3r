//import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import initialTasks from '../data/mock'
import Task from '../model/Task'
import List from '../components/list/List'
// import Selection from '../components/list/Selection'
//import Task from '../model/Task'

type TaskProps = {
	id: number
	description: string
	finished: boolean
}

export default function Home() {

	const [tasks, setTasks] = useState(initialTasks)

	// useEffect(() => {
	// 	setTasks(initialTasks.allTasks)
	// 	console.log(tasks)
	// // }, [])

	// let tasks = initialTasks
	// tasks = tasks.addTask(Task.createActiveTask(4, 'Program TCC'))

	function renderTasks(){
		return tasks.allTasks.map((task: TaskProps) => {
			return (
				<div key={task.id} className="font-bold text-lg">
					<span>{task.id}, {task.description}, {task.finished ? 'Finalizada' : 'Ativa'}</span>
					<br />			
				</div>
			)
		})
	}

	return (
		<main className='flex flex-col justify-center items-center h-screen text-white bg-gradient-to-tr from-purple-500 to-yellow-600'>
			<List tasks={tasks} changed={newTasks => {setTasks(newTasks)}} />
		</main>
	)
}