'use client';
import TodoItem from './TodoItem';
import { observer } from 'mobx-react';
import { useRootStore } from '@/store';
import { toJS } from 'mobx';

const TodoList = () => {
  const { todoStore } = useRootStore();
  const todos = toJS(todoStore.todos);

  return (
    <>
      <ul className='flex flex-col gap-4 p-4 w-4/5 md:w-2/3 lg:w-3/6 bg-white rounded-md mx-auto '>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}

        {todos.length === 0 && <p>No todos found</p>}
      </ul>
    </>
  );
};

export default observer(TodoList);
