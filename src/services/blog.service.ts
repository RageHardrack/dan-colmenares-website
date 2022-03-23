import Axios from "../Axios";

const BlogService = {
  getPosts: async () => {
    return await Axios.get("/blog/publicaciones");
  },
};

export default BlogService;
