import notion, { BLOG_DATABASE } from "../notion";

const blogServices = {
  fetchPostDatabase: async () => {
    return await notion.databases.query({
      database_id: BLOG_DATABASE,
      filter: {
        and: [
          {
            property: "Status",
            select: {
              equals: "Publicado",
            },
          },
        ],
      },
    });
  },

  getPostById: async (pageId: string) => {
    return await notion.pages.retrieve({ page_id: pageId });
  },
};

export default blogServices;
