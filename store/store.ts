import { action, makeAutoObservable, observable } from 'mobx';

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: string;
}

class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
    if (typeof window !== 'undefined') {
      this.loadFromLocalStorage();
    }
  }

  saveToLocalStorage = () => {
    try {
      localStorage.setItem('todoStore', JSON.stringify(this.todos));
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };

  loadFromLocalStorage = () => {
    try {
      const storedData = localStorage.getItem('todoStore');
      if (storedData) {
        this.todos = JSON.parse(storedData);
      }
    } catch (error) {
      console.error('Error loading from local storage:', error);
    }
  };

  // Hydrate / Get todo from the localStorage

  // private hydrate() {
  //   if (typeof window !== 'undefined' && window.localStorage) {
  //     const persistedTodoStore = localStorage.getItem('todoStore');
  //     if (persistedTodoStore) {
  //       this.todos = JSON.parse(persistedTodoStore);
  //     }
  //   }
  // }

  // Save todo in the localStorage
  // private persist() {
  //   const todoStoreData = JSON.stringify(this.todos);
  //   localStorage.setItem('todoStore', todoStoreData);
  // }


  addTodo = (todo: Omit<Todo, 'id'>) => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000000),
      ...todo,
    };
    this.todos.push(newTodo);
    if (typeof window !== 'undefined') {
      this.saveToLocalStorage();
    } // Update local storage
  };

  updateTodo = (updatedTodo: Todo) => {
    const todo = this.todos.find((todo) => todo.id === updatedTodo.id);
    if (todo) {
      Object.assign(todo, updatedTodo);
    }
    if (typeof window !== 'undefined') {
      this.saveToLocalStorage();
    } // Update local storage
  };



  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    if (typeof window !== 'undefined') {
      this.saveToLocalStorage();
    } // Update local storage
  };
}

// export default todoStore
// export const todoStore = new TodoStore();

export default TodoStore;
