import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = [{}];

  return (
    <div>
      <ul className="p-4">
        <TodoItem />
      </ul>
    </div>
  );
}

export default TodoList;
