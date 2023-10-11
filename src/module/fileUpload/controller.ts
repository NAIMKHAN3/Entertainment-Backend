import { NextFunction, Request, Response } from "express";

export const fileUpload = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const file = req.files as any;
       if(file[0]?.location){
        res.status(200).send({
            success:true,
            data: file[0].location
        })
       }else{
        res.status(400).send({
            success:false,
            message: "File Upload failed"
        })
       }
    }
    catch(err){
        next(err)
    }
}