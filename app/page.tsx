'use client'
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { HiPlus } from 'react-icons/hi'


import Modal from './components/Modal';
import TodoList from './components/TodoList';

const Home = () => {
  const [openAddModal, setAddModal] = useState(false)

  const closeModal = () => {
    setAddModal(false)
  }

  const openModal = () => {
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