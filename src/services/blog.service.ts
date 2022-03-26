import Axios from "../Axios";

const BlogService = {
  getPosts: async () => {
    return await Axios.get("/blog/publicaciones");
  },

  getPostBySlug: async (slug: string) => {
    return await Axios.get(`/blog/publicaciones/${slug}`);
  },
};

export default BlogService;
