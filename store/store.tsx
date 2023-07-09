import { makeAutoObservable } from "mobx";


type Todo = {
  id: number,
  title: string,
  description: string,
  status: string
}



class TodoStore {

  todos: Todo[] = []

  constructor() {
    makeAutoObservable(this)
  }

  addTodo = (todo: Omit<Todo, 'id'>) => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 1000000),
      ...todo
    }
    this.todos.push(newTodo);
  };

  removeTodo = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  updateTodoStatus = (id: number, status: string) => {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.status = status;
    }
  };

  updateTodo = (id: number, updatedTodo: Omit<Todo, 'id'>) => {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.title = updatedTodo.title;
      todo.description = updatedTodo.description;
    }
  };
}

const todoStore = new TodoStore();
export default todoStore