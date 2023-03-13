const express = require("express");
const TaskController = require('../src/task/controller')
const router = express.Router();

/* GET users listing. */
router.get("/", TaskController.getAll);
router.post("/", TaskController.create);
router.get("/:id", TaskController.getById);
router.patch("/:id", TaskController.update);
router.delete("/:id", TaskController.deleteTask);


module.exports = router;
