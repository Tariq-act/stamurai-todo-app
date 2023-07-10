'use client'

import TodoList from '@/components/TodoList'
import { HiPlus } from 'react-icons/hi'

import { useRootStore } from '@/store'; import { observer } from 'mobx-react-lite';

const Home = () => {
  const { todoStore } = useRootStore()

  const closeModal = () => {
    todoStore.toggleModal()
  }

  return (
    <main className='mt-20 w-full flex flex-col items-center justify-center'>
      <button className='mb-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800' onClick={closeModal} ><HiPlus /></button>
      <TodoList />
    </main>
  )
}


export default observer(Home)