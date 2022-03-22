import { Client } from "@notionhq/client";

export const BLOG_DATABASE = process.env.NOTION_DATABASE_BLOG_ID as string;

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default notion;
