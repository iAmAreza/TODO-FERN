import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between">
      <h1 className="text-white text-xl font-bold">Todo App</h1>
      <Link to="/todos">
        <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200">
          Open Todos
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
