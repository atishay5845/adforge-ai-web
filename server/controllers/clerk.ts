import { Request,Response } from "express";
import { verifyWebhook } from '@clerk/express/webhooks'
import { prisma } from "../configs/prisma";
const clerkWebhooks = async (req: Request, res: Response) => {
  try{
    const evt:any = await verifyWebhook(req)
    //getting data from req
    const {data,type} = evt;

    switch(type){
      case "user.created":{
        await prisma.user.create({
          data:{
            id: data.id,
            email: data?.email_addresses[0]?.email_address,
            name: data?.first_name + " " + data?.last_name,
            image: data?.image_url,
          }
        })
        break;
      }
      case "user.updated":{
        await prisma.user.update({
          where:{
            id: data.id
          },
          data:{
            email: data?.email_addresses[0]?.email_address,
            name: data?.first_name + " " + data?.last_name,
            image: data?.image_url,
          }
        })
        break;
      }
      case "user.deleted":{
        await prisma.user.delete({
          where:{
            id: data.id
          }
        })
        break;
      }
      case "paymentAttempt.updated":{
        if((data.charge_type === "recurring" || data.charge_type === "check_out") && data.status === "paid"){
          const credits = {pro: 80,premium: 240}
          const clerkUserId = data?.payer?.user_id;
          const planId: keyof typeof credits = data?.subscription_items?.[0]?.plan?.slug;

          if(planId !== "pro" && planId !== "premium"){
            return res.status(400).json({message: "Invalid plan"})
          }
          console.log(planId);

          await prisma.user.update({
            where:{
              id: clerkUserId
            },
            data:{
              credits: {
                increment: credits[planId]
              }
            }
          })
        }
        break;

      }
      default:
        break;
    }

  }catch(error: any){
    res.status(500 ).json({message: error.message})
  }
}

export default clerkWebhooks;