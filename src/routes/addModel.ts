import {Router} from 'express';
import { Request,Response } from 'express';
import { asyncHandler } from '../utils/asynHandler';
import { addModel } from '../constant';

const adminRouter = Router();

adminRouter.post("/addModel",asyncHandler(async (req: Request, res: Response) => {
    const {modelName} = req.body;

    if(!modelName){
        return res.status(400).json({error: "Model name is required"});
    }

    addModel(modelName);

    return res.status(200).json({message: "Model added successfully"});






  
}));

