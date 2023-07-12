'use client';
import { makeAutoObservable, observable } from 'mobx';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: string;
}

class TodoStore {
  todos: Todo[] = observable.array([], { deep: true });

  constructor() {
    makeAutoObservable(this);
    this.hydrate();
  }

  // Hydrate / Get todo from the localStorage
  private hydrate() {
    const persistedTodoStore = localStorage.getItem('todoStore');
    if (persistedTodoStore) {
      const parsedTodos = JSON.parse(persistedTodoStore);
      this.todos = parsedTodos;
    }
  }

  // Save todo in the localStorage
  private persist() {
    const todoStoreData = JSON.stringify(this.todos);
    localStorage.setItem('todoStore', todoStoreData);
  }


  addTodo = (todo: Omit<Todo, 'id'>) => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000000),
      ...todo,
    };
    this.todos.push(newTodo);
    this.persist(); // Update local storage
  };

  updateTodo = (updatedTodo: Todo) => {
    const todo = this.todos.find((todo) => todo.id === updatedTodo.id);
    if (todo) {
      todo.title = updatedTodo.title;
      todo.description = updatedTodo.description;
      todo.status = updatedTodo.status;
    }
    this.persist(); // Update local storage
  };



  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.persist(); // Update local storage
  };
}

// const todoStore = new TodoStore();
// export default todoStore

export default TodoStore;
