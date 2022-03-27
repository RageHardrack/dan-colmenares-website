import { Request, Response } from "express";
import { linkServices } from "../services";

const linkController = {
  /**
   * Get the Social Media Links from Notion
   */
  getLinks: async (req: Request, res: Response) => {
    try {
      const linksPages = await linkServices.fetchLinksDatabase();

      res.json(linksPages);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "No se pudieron obtener los enlaces" });
    }
  },
};

export default linkController;
