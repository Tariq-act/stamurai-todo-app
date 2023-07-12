import { action, makeAutoObservable } from 'mobx';

export interface Todo {
  id?: number | string;
  title: string;
  description: string;
  status: string;
}

class TodoStore {
  todos: Todo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTodos = async () => {
    try {
      const response = await fetch('https://64af0311c85640541d4e0704.mockapi.io/api/todos');
      const data = await response.json();
      action(() => { this.todos = data })();
      console.log(data);

    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }


  createTodo = action(async (todoData: Todo) => {
    try {
      const response = await fetch('https://64af0311c85640541d4e0704.mockapi.io/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todoData),
      });
      const createdTodo = await response.json();
      action(() => {
        this.todos.push(createdTodo);
      })();
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  })

  async updateTodo(todoId: number, updatedTodoData: Todo) {
    try {
      const response = await fetch(`https://64af0311c85640541d4e0704.mockapi.io/api/todos/${todoId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedTodoData),
      });
      const updatedTodo = await response.json();
      action(() => {
        const index = this.todos.findIndex((todo) => todo.id === todoId);
        if (index !== -1) {
          this.todos[index] = updatedTodo;
        }
      })();
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  }

  async deleteTodo(todoId: number) {
    try {
      await fetch(`https://64af0311c85640541d4e0704.mockapi.io/api/todos/${todoId}`, {
        method: 'DELETE',
      });
      action(() => {
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
      })();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }
}


// export default todoStore
export default TodoStore;


export const todoStore = new TodoStore();

