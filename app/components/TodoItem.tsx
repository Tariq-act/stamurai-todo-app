import { useState } from 'react';
import { observer } from 'mobx-react';

import { TiDelete } from 'react-icons/ti';
import { TbEdit } from 'react-icons/tb';

import { Todo } from '@/store/store';
import { todoStore } from '@/store/store';

// Component
import Modal from './Modal';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const { id, title, description, status } = todo;

  // Delete Todo from UI
  const deleteTodo = async () => {
    await todoStore.deleteTodo(Number(id));
    await todoStore.fetchTodos();
  };

  const closeModal = () => {
    setOpenEditModal(false);
  };
  const openModal = () => {
    setOpenEditModal(true);
  };

  // Get Colors with status value

  const statusColor = (where: string) =>
    status &&
    (status === '1'
      ? `${where}-blue-600`
      : status == '2'
      ? `${where}-yellow-500`
      : `${where}-green-600`);

  return (
    <li className='w-full flex gap-5 items-center justify-between mx-auto bg-white rounded-md p-3 shadow-md'>
      <div className='flex flex-col w-1/2 text-sm md:text-base'>
        <h3 className=' font-medium underline capitalize'> {title}</h3>
        <p className='text-sm break-words text-gray-600 '>{description}</p>
      </div>
      <p
        className={`flex w-1/3 items-center gap-1 ${
          status == '1'
            ? 'text-blue-600'
            : status == '2'
            ? 'text-yellow-500'
            : 'text-green-600'
        } text-xs md:text-sm `}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            status == '1'
              ? 'bg-blue-600'
              : status == '2'
              ? 'bg-yellow-500'
              : 'bg-green-600'
          } `}
        ></span>
        {status === '1' && 'todo'}
        {status === '2' && 'progress'}
        {status === '3' && 'completed'}
      </p>

      <div className='flex  w-1/5 gap-3 text-white text-sm items-center justify-end'>
        <button className='bg-green-600 p-1 rounded-md' onClick={openModal}>
          <TbEdit fontSize={'16px'} />
        </button>
        <button className='bg-red-600 p-1 rounded-md' onClick={deleteTodo}>
          <TiDelete fontSize={'16px'} />
        </button>
      </div>

      {openEditModal && <Modal mode='edit' close={closeModal} todo={todo} />}
    </li>
  );
};

export default observer(TodoItem);
