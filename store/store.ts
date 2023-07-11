import { makeAutoObservable, observable } from "mobx";


export interface Todo {
  id: number;
  title: string;
  description: string;
  status: string;
}


class TodoStore {

  todos: Todo[] = observable.array([], { deep: true });



  constructor() {
    makeAutoObservable(this)
  }

  // @observable newProperty;


  editToggle = (id: number, todo: Todo) => {

    console.log(todo)


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








  // updateTodo = (updatedTodo, id: number) => {
  //   this.todos[this.editedTodoIndex] = updatedTodo;
  //   this.closeModal();
  // }



}

// const todoStore = new TodoStore();
// export default todoStore

export default TodoStore;