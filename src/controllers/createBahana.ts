

import { Request, Response } from "express";
import { createBahanaResponse } from "../utils/createBahnaResponse";


export const createBahana = async (req: Request, res: Response) => {
    try {
      const { category, context, tone ,who} = req.body;
  
      if (!category || !context || !tone || !who) {
        return res.status(400).json({
          error: "Category, context , who and tone are required",
        });
      }
  
      const bahana = await createBahanaResponse(
        category,
        context,
        tone,
        who
      );
  
      res.json({ bahana });
    } catch (err) {
      res.status(500).json({ error: "Failed to generate bahana",err });
    }
  };
  