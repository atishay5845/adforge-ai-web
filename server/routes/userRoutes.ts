import express from "express";
import { getUserCredits, getAllProjects, getProjectById, toggleProjectPublish } from "../controllers/userController";
import { protect } from "../middlewares/auth";
const userRouter = express.Router();


userRouter.get("/credits",protect, getUserCredits);//get user credits from clerk webhook and update in database
userRouter.get("/projects",protect, getAllProjects);//get all user projects
userRouter.get("/projects/:id",protect, getProjectById);//get project by id
userRouter.patch("/projects/:id/publish",protect, toggleProjectPublish);//publish and unpublish project

export default userRouter;