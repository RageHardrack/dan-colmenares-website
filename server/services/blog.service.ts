import notion, { BLOG_ID } from "../notion";

const blogServices = {
  fetchPostDatabase: async () => {
    return await notion.databases.query({
      database_id: BLOG_ID,
      page_size: 10,
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
      sorts: [{ property: "Fecha_Publicacion", direction: "descending" }],
    });
  },

  fetchPostById: async (pageId: string) => {
    return await notion.pages.retrieve({ page_id: pageId });
  },
};

export default blogServices;
