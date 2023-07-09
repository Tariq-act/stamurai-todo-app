import { TiDelete } from 'react-icons/ti';
import { TbEdit } from 'react-icons/tb';
import Modal from './Modal';

function TodoItem() {
  return (
    <>
      <div className='w-full flex gap-5 items-center mx-auto bg-white rounded-md p-3 shadow-md '>
        <div className=''>
          <h3 className=' font-medium'>Title 1</h3>
          <p className='text-sm text-gray-600 '>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas,
            sint. Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
        <p className='flex items-center gap-1'>
          <span className='w-2 h-2 rounded-full bg-black'></span>
          status
        </p>

        <div className='flex gap-3 text-white text-sm items-center'>
          <button className='bg-green-600 p-1 rounded-md'>
            <TbEdit fontSize={'16px'} />
          </button>
          <button className='bg-red-600 p-1   rounded-md'>
            <TiDelete fontSize={'16px'} />
          </button>
        </div>
      </div>
      <Modal />
    </>
  );
}

export default TodoItem;
