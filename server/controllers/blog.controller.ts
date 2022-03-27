import { Request, Response } from "express";
import { blogServices } from "../services";
import { Page } from "../interfaces";

const blogController = {
  /**
   * Get the posts with the Tag "Publicado" from Notion
   */
  getPosts: async (req: Request, res: Response) => {
    try {
      const { results } = await blogServices.fetchBlogDatabase();

      const promises = results.map((page) => {
        return blogServices.fetchPostById(page.id);
      });

      const pages = (await Promise.all(promises)) as Page[];
      res.json(pages);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "No se pudieron obtener las publicaciones" });
    }
  },

  /**
   * Get the post content using the page slug from Notion
   */
  getPostContent: async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;

      const { results } = await blogServices.fetchBlogDatabase();

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
      console.log(error);
      res
        .status(500)
        .json({ message: "No se pudo obtener el contenido de la Publicación" });
    }
  },
};

export default blogController;
