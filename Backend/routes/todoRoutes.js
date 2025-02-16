const express = require("express");
const todoController = require("../controllers/todoControllers");

const router = express.Router();

router.post("/titles", todoController.addTitle);
router.get("/titles", todoController.getTitles);

router.post("/todos", todoController.addTodo);
router.put("/todos/:titleId/:todoId", todoController.updateTodo);
router.delete("/todos/:titleId/:todoId", todoController.deleteTodo);
router.delete("/titles/:titleId", todoController.deleteTitle);



module.exports = router;
