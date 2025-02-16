import TodoItem from "./TodoItem";

const TodoList = ({ todos, onEdit, onDelete, onToggle }) => {
  return (
    <div className="mt-3 space-y-3">
      {todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onEdit={onEdit} 
          onDelete={onDelete} 
          onToggle={onToggle} 
        />
      ))}
    </div>
  );
};

export default TodoList;
