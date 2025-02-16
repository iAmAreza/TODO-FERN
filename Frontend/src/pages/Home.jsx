import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Todo App</h1>
      <p className="text-lg text-gray-600 mb-6">Manage your tasks efficiently with our simple todo app.</p>
      <Link to="/todos">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Home;
