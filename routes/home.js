const { Router } = require("express");
const router = Router();
const Todo = require("../model/todo");
router.get("/", async (req, res) => {
  const todoColection = await Todo.find({});
  return res.json(todoColection);
});
router.post("/", async (req, res) => {
  await  console.log(req.body);
});
module.exports = router;
