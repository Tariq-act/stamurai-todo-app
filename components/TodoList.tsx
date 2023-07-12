'use client';
import TodoItem from './TodoItem';
import { observer } from 'mobx-react';
import { useRootStore } from '@/store';
import { toJS } from 'mobx';

const TodoList = () => {
  const { todoStore } = useRootStore();
  const todos = toJS(todoStore.todos);


  return (

    <ul className='flex flex-col gap-4 p-4 w-4/5 md:w-2/3 lg:w-3/6 bg-white rounded-md mx-auto' data-hydration="true">

      {todos.length > 0 ? (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <li key="no-todos">No todos found</li>
      )}

    </ul>

  );
};

export default observer(TodoList);
