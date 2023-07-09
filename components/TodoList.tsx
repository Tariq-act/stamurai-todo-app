import TodoItem from "./TodoItem";

function TodoList({ showModal, setShowModal }) {
  const todoList = [{}];

  return (
    <div>
      <ul className="flex flex-col gap-4 p-4 w-10/12 bg-white rounded-md md:w-[60%] lg:w-[50%] mx-auto">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
}

export default TodoList;
