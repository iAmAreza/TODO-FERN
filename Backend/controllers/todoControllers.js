const { db } = require("../config/firebase");
const { v4: uuidv4 } = require("uuid");

// Add a new title (category)
const addTitle = async (req, res) => {
  try {
    const { title } = req.body;
    const newTitle = { title, todos: [] };
    const titleRef = await db.collection("titles").add(newTitle);
    res.status(201).json({ id: titleRef.id, ...newTitle });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all titles
const getTitles = async (req, res) => {
  try {
    const snapshot = await db.collection("titles").get();
    const titles = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.json(titles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new todo under a title
const addTodo = async (req, res) => {
  try {
    const { titleId, text } = req.body;
    const titleDoc = db.collection("titles").doc(titleId);
    const titleData = await titleDoc.get();

    if (!titleData.exists) {
      return res.status(404).json({ error: "Title not found" });
    }

    const newTodo = { id: uuidv4(), text, completed: false };
    await titleDoc.update({
      todos: [...titleData.data().todos, newTodo],
    });

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a todo under a title
const updateTodo = async (req, res) => {
  try {
    const { titleId, todoId } = req.params;
    const { text, completed } = req.body;

    const titleDoc = db.collection("titles").doc(titleId);
    const titleData = await titleDoc.get();

    if (!titleData.exists) {
      return res.status(404).json({ error: "Title not found" });
    }

    const todos = titleData.data().todos.map((todo) =>
      todo.id === todoId ? { ...todo, text, completed } : todo
    );

    await titleDoc.update({ todos });
    res.json({ id: todoId, text, completed });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a todo under a title
const deleteTodo = async (req, res) => {
  try {
    const { titleId, todoId } = req.params;

    const titleDoc = db.collection("titles").doc(titleId);
    const titleData = await titleDoc.get();

    if (!titleData.exists) {
      return res.status(404).json({ error: "Title not found" });
    }

    const updatedTodos = titleData
      .data()
      .todos.filter((todo) => todo.id !== todoId);

    await titleDoc.update({ todos: updatedTodos });
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteTitle = async (req, res) => {
  try {
    const { titleId } = req.params;

    // 🔹 Check if the title exists before trying to delete
    const titleDoc = await db.collection("titles").doc(titleId).get();
    if (!titleDoc.exists) {
      return res.status(404).json({ error: "Title not found" });
    }

    // 🔹 Delete the title
    await db.collection("titles").doc(titleId).delete();
    res.json({ message: "Title and all its todos deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addTitle,
  getTitles,
  addTodo,
  updateTodo,
  deleteTodo,
  deleteTitle
};
