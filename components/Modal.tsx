'use client';
import { SyntheticEvent, ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react';

import { RxCross2 } from 'react-icons/rx';
import { useRootStore } from '@/store';

function Modal() {
  const [state, setState] = useState({
    title: '',
    description: '',
    status: '',
  });
  const { todoStore } = useRootStore();
  const isEdit = todoStore.isEdit;

  const handleChange = (e: ChangeEvent<EventTarget>): void => {
    let { name, value } = e.target as HTMLInputElement;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const { title, description, status } = state
    if (title === '' || description == '' || status === '') {
      alert('Fill all the field properly')
      return
    }
    todoStore.addTodo({ title, description, status })
  }

  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 flex items-center justify-center '>
      <form className='flex flex-col gap-4 w-3/4 md:w-5/12  lg:w-4/12  bg-white p-4 rounded-md relative'>
        <button
          type='button'
          className='absolute right-4 hover:bg-gray-200 rounded-full p-2 transition ease-linear'
          onClick={todoStore.toggleModal}
        >
          <RxCross2 />
        </button>

        <h1 className='text-center font-medium text-lg '>{isEdit ? 'Edit Todo' : 'Add Todo'}</h1>
        <input
          name='title'
          value={state.title}
          onChange={handleChange}
          type='text'
          placeholder='Enter title'
          className='border-2 outline-none p-2 rounded-md'
        />

        <textarea
          name='description'
          value={state.description}
          onChange={handleChange}
          rows={3}
          placeholder='Enter description'
          className='border-2 outline-none p-2 rounded-md resize-none'
        ></textarea>

        <select
          name='status'
          value={state.status}
          onChange={handleChange}
          id=''
          className='border-2 outline-none p-2 rounded-md'
        >
          <option value="" disabled> Select </option>
          <option value='1'>Todo</option>
          <option value='2'>progress</option>
          <option value='3'>completed</option>
        </select>

        {isEdit ? (
          <button
            type='submit'
            className='bg-green-700 text-white p-2 rounded-md'
          >
            Update Todo
          </button>
        ) : (
          <button type='submit' className='bg-black text-white p-2 rounded-md' onClick={handleSubmit}>
            Add Todo
          </button>
        )}
      </form>
    </div>
  );
}

export default observer(Modal);