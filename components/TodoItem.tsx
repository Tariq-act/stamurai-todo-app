import { TiDelete } from 'react-icons/ti';
import { observer } from 'mobx-react';
import { TbEdit } from 'react-icons/tb';
import Modal from './Modal';
import { useRootStore } from '@/store';
import { Todo } from '@/store/store';
import { useState } from 'react';

// interface TodoItemProps {
//   todo: Todo;
// }

const TodoItem: React.FC<Todo> = ({ todo }) => {
  const { todoStore } = useRootStore()
  const { id, title, description, status } = todo
  console.log({ id, title, description, status });

  const [openEditModal, setOpenEditModal] = useState<boolean>(false);

  const closeModal = () => {
    setOpenEditModal(false)
  }
  const openModal = () => {
    setOpenEditModal(true)
  }



  return (
    <>
      <div className='w-full flex gap-5 items-center justify-between mx-auto bg-white rounded-md p-3 shadow-md '>
        <div className=''>
          <h3 className=' font-medium'> {title}</h3>
          <p className='text-sm text-gray-600 '>
            {description}
          </p>
        </div>
        <p className='flex items-center gap-1'>
          <span className='w-2 h-2 rounded-full bg-black'></span>
          {status}
        </p>

        <div className='flex gap-3 text-white text-sm items-center'>
          <button className='bg-green-600 p-1 rounded-md' onClick={openModal}>
            <TbEdit fontSize={'16px'} />
          </button>
          <button className='bg-red-600 p-1   rounded-md'>
            <TiDelete fontSize={'16px'} />
          </button>
        </div>
      </div>
      {
        openEditModal && <Modal mode='edit' close={closeModal} todo={todo} />
      }
    </>
  );
}

export default observer(TodoItem);
