import express from "express";
import { createProject, createVideo, deleteProject, getAllPublishedProjects } from "../controllers/projectController";
import { protect } from "../middlewares/auth";
const projectRouter = express.Router();

projectRouter.post("/create",protect, createProject);
projectRouter.post("/video",protect, createVideo);
projectRouter.get("/published", getAllPublishedProjects);
projectRouter.delete("/:projectId",protect, deleteProject);

export default projectRouter;