'use client'

import TodoList from '@/components/TodoList'
import { HiPlus } from 'react-icons/hi'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false)

  const closeModal = () => {
    setShowModal(!!showModal)
  }

  return (
    <main className='mt-20 w-full flex flex-col items-center justify-center'>
      <button className='mb-4 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800' ><HiPlus /></button>
      <TodoList isModal={showModal} />
    </main>
  )
}
