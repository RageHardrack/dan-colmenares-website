import Axios from "../Axios";

const LinkService = {
  getLinks: async () => {
    return await Axios.get("/links/get-links");
  },
};

export default LinkService;
