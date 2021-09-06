//import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import initialTasks from '../data/mock'
import List from '../components/list/List'

export default function Home() {

	const [tasks, setTasks] = useState(initialTasks)

	return (
		<main className='flex flex-col justify-center items-center h-screen text-white bg-gradient-to-tr from-purple-500 to-yellow-600'>
			<List tasks={tasks} changed={newTasks => {setTasks(newTasks)}} />
		</main>
	)
}