import { useState } from 'react';
import { observer } from 'mobx-react';

import { TiDelete } from 'react-icons/ti';
import { TbEdit } from 'react-icons/tb';

import { useRootStore } from '@/store';
import { Todo } from '@/store/store';

// Component
import Modal from './Modal';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const { todoStore } = useRootStore();
  const { id, title, description, status } = todo;

  const deleteTodo = () => {
    todoStore.removeTodo(id);
  };

  const closeModal = () => {
    setOpenEditModal(false);
  };
  const openModal = () => {
    setOpenEditModal(true);
  };

  // Get Colors with status value
  const statusColor = (where: string) =>
    status && status === '1'
      ? `${where}-blue-600`
      : status == '2'
        ? `${where}-yellow-500`
        : `${where}-green-600`;

  return (
    <>
      <li className='w-full flex gap-5 items-center justify-between mx-auto bg-white rounded-md p-3 shadow-md '>
        <div className='flex flex-col w-1/2'>
          <h3 className=' font-medium underline capitalize'> {title}</h3>
          <p className='text-sm break-words text-gray-600 '>{description}</p>
        </div>
        <p className={`flex w-1/2 items-center gap-1 ${statusColor('text')}`}>
          <span className={`w-2 h-2 rounded-full ${statusColor('bg')}`}></span>
          {status === '1' && 'todo'}
          {status === '2' && 'progress'}
          {status === '3' && 'completed'}
        </p>

        <div className='flex  w-1/3 gap-3 text-white text-sm items-center justify-end'>
          <button className='bg-green-600 p-1 rounded-md' onClick={openModal}>
            <TbEdit fontSize={'16px'} />
          </button>
          <button className='bg-red-600 p-1 rounded-md' onClick={deleteTodo}>
            <TiDelete fontSize={'16px'} />
          </button>
        </div>
      </li>
      {openEditModal && <Modal mode='edit' close={closeModal} todo={todo} />}
    </>
  );
};

export default observer(TodoItem);
