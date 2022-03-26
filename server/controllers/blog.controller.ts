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

  /**
   * Get from Notion the post content using the page slug
   */
  getPostContent: async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;

      const { results } = await blogServices.fetchPostDatabase();

      const current = results.find(
        (r: any) => r.properties.Slug["rich_text"][0]["plain_text"] == slug
      );

      if (!current)
        return res.status(500).json({
          message: "No se pudo obtener el contenido de la Publicación",
        });

      const { properties, id: pageId } = (await blogServices.fetchPostById(
        current.id as string
      )) as any;

      const content = await blogServices.fetchPostContent(pageId);

      res.json({ properties, content });
    } catch (error) {
      res
        .status(500)
        .json({ message: "No se pudo obtener el contenido de la Publicación" });
    }
  },
};

export default blogController;
