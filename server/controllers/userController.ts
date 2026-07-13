//get user credits from clerk webhook and update in database
import { Request, Response } from "express";
import * as Sentry from "@sentry/node";

export const getUserCredits = async (req: Request, res: Response) => {
  try{

  }catch(error: any){
    Sentry.captureException(error);
    res.status(500).json({message: error.message})
  }
}

//const get all user projects
export const getAllUserProjects = async (req: Request, res: Response) => {
  try{

  }catch(error: any){
    Sentry.captureException(error);
    res.status(500).json({message: error.message})
  }
}