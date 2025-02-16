const TodoItem = ({ todo, onEdit, onDelete, onToggle }) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-md">
      <span className={`flex-1 ${todo.completed ? "line-through text-gray-500" : ""}`}>
        {todo.text}
      </span>
      <button 
        className="text-blue-500 hover:underline mx-2 cursor-pointer"
        onClick={() => onEdit(todo)}
      >
        Edit
      </button>
      <button 
        className="text-red-500 hover:underline mx-2 cursor-pointer"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
      <button 
        className={`px-3 py-1 rounded-md mx-2 text-white cursor-pointer ${todo.completed ? "bg-green-500" : "bg-red-500"}`}
        onClick={() => onToggle(todo)}
      >
        {todo.completed ? "Completed" : "Complete"}
      </button>
    </div>
  );
};

export default TodoItem;
