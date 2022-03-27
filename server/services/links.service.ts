import notion, { LINK_TREE_ID } from "../notion";

const linkServices = {
  fetchLinksDatabase: async () => {
    const { results } = await notion.databases.query({
      database_id: LINK_TREE_ID,
      page_size: 20,
      sorts: [{ property: "Orden", direction: "ascending" }],
    });

    return results.map((link: any) => link.properties);
  },
};

export default linkServices;
