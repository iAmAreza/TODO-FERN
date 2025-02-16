import { useEffect, useState } from "react";
import firebaseService from "../services/firebase";
import TodoList from "../components/TodoList";

const Todos = () => {
  const [titles, setTitles] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  useEffect(() => {
    firebaseService.getTitles().then(setTitles);
  }, []);

  const handleAddTitle = async () => {
    const newTitleObj = await firebaseService.addTitle(newTitle);
    setTitles([...titles, newTitleObj]);
    setNewTitle("");
  };

  const handleAddTodo = async (titleId, text) => {
    const newTodo = await firebaseService.addTodo(titleId, text);
    setTitles(titles.map(title =>
      title.id === titleId ? { ...title, todos: [...title.todos, newTodo] } : title
    ));
  };

  const handleDeleteTodo = async (titleId, todoId) => {
    await firebaseService.deleteTodo(titleId, todoId);
    setTitles(titles.map(title =>
      title.id === titleId ? { ...title, todos: title.todos.filter(todo => todo.id !== todoId) } : title
    ));
  };

  const handleEditTodo = async (titleId, todo) => {
    const newText = prompt("Edit Todo:", todo.text);
    if (newText) {
      const updatedTodo = await firebaseService.updateTodo(titleId, todo.id, { ...todo, text: newText });
      setTitles(titles.map(title =>
        title.id === titleId ? { 
          ...title, 
          todos: title.todos.map(t => t.id === todo.id ? updatedTodo : t) 
        } : title
      ));
    }
  };

  const handleToggleTodo = async (titleId, todo) => {
    const updatedTodo = await firebaseService.updateTodo(titleId, todo.id, { ...todo, completed: !todo.completed });
    setTitles(titles.map(title =>
      title.id === titleId ? { 
        ...title, 
        todos: title.todos.map(t => t.id === todo.id ? updatedTodo : t) 
      } : title
    ));
  };

  const handleDeleteTitle = async (titleId) => {
    try {
      await firebaseService.deleteTitle(titleId);
      setTitles(titles.filter(title => title.id !== titleId));
    } catch (error) {
      alert("Failed to delete title. Please try again.");
    }
  };
  

  return (
    <div className="p-5 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-3">Add Title</h2>
      <input 
        className="border p-2 w-full" 
        value={newTitle} 
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleAddTitle}>
        Add Title
      </button>

      {titles.map((title) => (
        <div key={title.id} className="mt-5 bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold">{title.title}</h3>
          <TodoList 
            todos={title.todos} 
            onEdit={(todo) => handleEditTodo(title.id, todo)} 
            onDelete={(todoId) => handleDeleteTodo(title.id, todoId)} 
            onToggle={(todo) => handleToggleTodo(title.id, todo)}
          />
          <button 
            className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={() => handleAddTodo(title.id, prompt("Enter Todo"))}
          >
            Add Todo
          </button>
          <button 
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg ml-3"
            onClick={() => handleDeleteTitle(title.id)}
          >
            Delete Title
          </button>

        </div>
      ))}
    </div>
  );
};

export default Todos;
