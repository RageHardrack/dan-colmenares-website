import notion, { BLOG_ID } from "../notion";

const blogServices = {
  fetchBlogDatabase: async () => {
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

  fetchPostContent: async (blockId: string) => {
    const { results } = await notion.blocks.children.list({
      block_id: blockId,
      page_size: 100,
    });

    return results.map((block: any) => block.paragraph.rich_text[0].plain_text);
  },
};

export default blogServices;
