import { Request, Response } from "express";
import { blogServices } from "../services";
import { Page } from "../interfaces";

const blogController = {
  /**
   * Get from Notion the posts with the Tag "Publicado"
   */
  getPosts: async (req: Request, res: Response) => {
    try {
      const { results } = await blogServices.fetchPostDatabase();

      const promises = results.map((page) => {
        return blogServices.fetchPostById(page.id);
      });

      const pages = (await Promise.all(promises)) as Page[];
      res.json(pages);
    } catch (error) {
      res
        .status(500)
        .json({ message: "No se pudieron obtener las publicaciones" });
    }
  },
};

export default blogController;
