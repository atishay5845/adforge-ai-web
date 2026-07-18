import {Request, Response} from "express";
import * as Sentry from "@sentry/node";
import { prisma } from "../configs/prisma";
import {v2 as cloudinary} from "cloudinary";
import ai from "../configs/ai";
import { GenerateContentConfig, HarmBlockThreshold, HarmCategory } from "@google/genai";
import path from "path";
import fs from 'fs';

const loadImage = (path:string, mimeType:string)=>{
  return {
    inlineData:{
      data: fs.readFileSync(path).toString('base64'),
      mimeType
    }
  }
}

//this function will create a new project and return the project id based  on the user credits and the project details


export const createProject = async (req: Request, res: Response) => {
  let tempProjectId: string;
  const {userId} = req.auth();
  let isCreditsAvailable = false;
  const {name='New Project',aspectRatio,userPrompt,productName,productDescription, targetLength = 5} = req.body;

  const images:any = req.files;
  if(images.length < 2 || !productName){
    return res.status(400).json({message: "Please upload at least 2 images and provide a product name"});
  }

  const user = await prisma.user.findUnique({
    where:{
      id: userId
    }
  })
  if(!user || user.credits < 5){
    return res.status(400).json({message: "Insufficient credits to create a project"});
  }else{
    //deduct credits for image generation
    await prisma.user.update({
      where:{
        id: userId
      },
      data:{
        credits: {decrement: 5}
      }
    }).then(()=>{isCreditsAvailable = true})
  }
    
  
  try{
    let uploadedImages = await Promise.all(
      images.map(async (item:any) => {
        let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
        return result.secure_url;
      })
    );
    const project = await prisma.project.create({
      data:{
        name,
        userId,
        productName,
        productDescription,
        userPrompt,
        aspectRatio,
        targetLength: parseInt(targetLength),
        uploadedImages,
        isGenerating: true
      }
    })
    tempProjectId = project.id;
    //call the google gen ai api to generate the video based on the uploaded images and the user prompt
    const model = 'gemini-3-pro-image-preview';
    //
    const generationConfig: GenerateContentConfig  = {
      maxOutputTokens: 1024,//max output tokens for the generated content
      temperature: 1,//
      topP: 0.95,// this means that the model will consider the top 95% of the probability distribution when generating the next token. This helps to ensure that the generated content is diverse and not too repetitive.
      responseModalities: ['IMAGE'],//this means that the model will generate an image as the output
      imageConfig:{ //this is the configuration for the image generation
        aspectRatio: aspectRatio || '9:16',
        imageSize: '1K',
      },
      safetySettings: [ //this is the configuration for the safety settings
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.OFF,
        },
        {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.OFF,
        },{
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.OFF,

        }
      ]

    }
    const img1base64 = loadImage(images[0].path,images[0].mimeType);
    const img2base64 = loadImage(images[1].path,images[1].mimeType);
    const prompt = {
      text: `Combine the person and product into a realistic photo.
      Make the person naturally hold or use the product.
      Match lighting, shadows, scale and perspective.
      Make the person stand in professional studio lighting.
      Output ecommerce-quality photo realistic imagery.
      ${userPrompt}`
    }
    //generate the img using the ai model
    const response: any = await ai.models.generateContent({
      model,
      contents: [img1base64,img2base64,prompt],
      config:generationConfig
    })

    //check if the response is valid
    if(!response?)

  }catch(error: any){
    Sentry.captureException(error);
    res.status(500).json({message: error.message})
  }

}

export const createVideo = async (req: Request, res: Response) => {
  try{

  }catch(error: any){
    Sentry.captureException(error);
    res.status(500).json({message: error.message})
  }

}
export const getAllPublishedProjects = async (req: Request, res: Response) => {
  try{

  }catch(error: any){
    Sentry.captureException(error);
    res.status(500).json({message: error.message})
  }

}

export const deleteProject = async (req: Request, res: Response) => {
  try{

  }catch(error: any){
    Sentry.captureException(error);
    res.status(500).json({message: error.message})
  }

}