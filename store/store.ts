'use client'
import { makeAutoObservable, observable } from "mobx";
import { useEffect } from "react";


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
    // if (typeof window !== 'undefined') {
    this.hydrate();
    // }
  }

  // // Save todos to local storage
  // private saveToLocalStorage = () => {
  //   if (typeof localStorage !== 'undefined') {
  //     localStorage.setItem('todos', JSON.stringify(this.todos));
  //   }
  // };

  // // Hydrate todos from local storage
  // private hydrate = () => {
  //   if (typeof localStorage !== 'undefined') {
  //     const savedTodos = localStorage.getItem('todos');
  //     if (savedTodos) {
  //       this.todos = JSON.parse(savedTodos);
  //     }
  //   }
  // };


  private hydrate() {


    const persistedTodoStore = localStorage.getItem('todoStore');
    if (persistedTodoStore) {
      const parsedTodos = JSON.parse(persistedTodoStore);
      this.todos = parsedTodos;
    }
  }

  private persist() {
    const todoStoreData = JSON.stringify(this.todos);
    localStorage.setItem('todoStore', todoStoreData);
  }


  // @observable newProperty;


  editToggle = (updatedTodo: Todo) => {

    const todo = this.todos.find((todo) => todo.id === updatedTodo.id);
    if (todo) {
      todo.title = updatedTodo.title;
      todo.description = updatedTodo.description;
      todo.status = updatedTodo.status;
    }
    this.persist(); // Update local storage

  }

  addTodo = (todo: Omit<Todo, 'id'>) => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000000),
      ...todo
    }
    this.todos.push(newTodo);

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