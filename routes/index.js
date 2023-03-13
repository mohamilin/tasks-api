const express = require("express");

const UserRoutes = require("./users");
const TaskRoutes = require("./tasks");

const router = express.Router();
router.get('/', (req, res) => {
    res.status(200).json({title: "Welcome Gamer Tag", message: "By Amilin"})
})


router.use("/tasks", TaskRoutes);
router.use("/users", UserRoutes);

module.exports = router;
