'use client'

import TodoList from '@/components/TodoList'
import { HiPlus } from 'react-icons/hi'

import { useRootStore } from '@/store'; import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import Modal from '@/components/Modal';

const Home = () => {
  const [openAddModal, setAddModal] = useState(false)
  const { todoStore } = useRootStore()

  const closeModal = () => {
    setAddModal(false)
  }
  
  const openModal =()=>{
    setAddModal(true)
  }

  return (
    <main className='mt-20 w-full flex flex-col items-center justify-center'>
      <button className='mb-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800' onClick={openModal} ><HiPlus /></button>
      <TodoList />

      {
        openAddModal && <Modal mode='add' close={closeModal} />
      }
    </main>
  )
}


export default observer(Home)