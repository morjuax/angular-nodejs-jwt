import { Router } from "express";
const router = Router();
import TaskController from '../controllers/TaskController'
import jwt from "jsonwebtoken";

router.get("/tasks", TaskController.tasks);


// TODO Middleware
const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("anUthorize Request");
  }

  let token = req.headers.authorization.split(" ")[1];

  if (token === null) {
    return res.status(401).send("anUthorize Request");
  }

  const payload = jwt.verify(token, 'secrectKey');
  req.userId = payload._id;
  next();
};


router.get("/private-tasks", verifyToken, TaskController.privateTasks);

export default router;

