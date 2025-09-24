import dotenv from 'dotenv';
import { ItemModel } from '../models/itemModel';
import { Request, Response } from 'express';

dotenv.config();

export class ItemController {
    getItems = async (req: Request, res: Response) => {
    try {
      const items = await ItemModel.getAllItems();
      res.json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}