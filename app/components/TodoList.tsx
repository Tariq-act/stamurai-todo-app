'use client';
import TodoItem from './TodoItem';
import { observer } from 'mobx-react';

import { todoStore } from '@/store/store';
import { useEffect } from 'react';
const TodoList = () => {
  // const { todos } = todoStore

  useEffect(() => {
    const fetchData = async () => {
      try {
        await todoStore.fetchTodos();
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <ul
      className='flex flex-col gap-4 p-4 w-4/5 md:w-2/3 lg:w-3/6 bg-white rounded-md mx-auto'
      data-hydration='true'
    >
      {todoStore.todos.length > 0 ? (
        todoStore.todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      ) : (
        <li key='no-todos'>No todos found</li>
      )}
    </ul>
  );
};

export default observer(TodoList);
