import { Request, Response } from "express";
import { blogServices } from "../services";

const blogController = {
  getPublicaciones: async (req: Request, res: Response) => {
    try {
      const { results } = await blogServices.fetchPostDatabase();

      const promises = results.map((page) => {
        return blogServices.getPostById(page.id);
      });

      const fullFilled = await Promise.all(promises);
      res.json(fullFilled);
    } catch (error) {
      res
        .status(500)
        .json({ message: "No se pudieron obtener las publicaciones" });
    }
  },
};

export default blogController;
